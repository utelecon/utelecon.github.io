import { useCallback, useId, useSyncExternalStore } from "react";
import styles from "./Tabs.module.scss"

export default function Tabs(props: {
  queryKey: string;
  defaultTab: string;
  /**
   * タブ名をキー，タブに表示するラベルを値とするオブジェクト．
   * タブはこのオブジェクトに書いた順に表示される．
   * （Astro のコンパイラは slot を名前の辞書順に並べ替えるため，表示順は slot ではなくこの prop で指定する）
   */
  tabs: Record<string, string>;
  [key: `panel.${string}`]: React.ReactNode;
}) {
  if (!props.queryKey || !props.defaultTab || !props.tabs) {
    throw new Error("props.queryKey, props.defaultTab and props.tabs are required")
  }

  const [selectedTab, setSelectedTab] = useSearchParamsState(props.queryKey);
  const selectedTabWithDefault = selectedTab ?? props.defaultTab;

  const tabs = Object.entries(props.tabs);
  const panels = Object.entries(props).filter(([key]) =>
    key.startsWith("panel."),
  ) as [`panel.${string}`, React.ReactNode][];

  const baseId = useId();

  return (
    <div className={styles["tabs"]}>
      <div className={styles["tab-list"]} role="tablist">
        {tabs.map(([tabName, label]) => {
          return (
            <button
              key={tabName}
              id={`${baseId}-tab-${tabName}`}
              type="button"
              role="tab"
              aria-controls={`${baseId}-panel-${tabName}`}
              aria-selected={selectedTabWithDefault === tabName}
              onClick={() => {
                setSelectedTab(tabName)
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className={styles["panel-list"]}>
        {panels.map(([key, element]) => {
          const tabName = key.replace(/^panel\./, "");
          return (
            <div
              key={key}
              id={`${baseId}-panel-${tabName}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${tabName}`}
              hidden={selectedTabWithDefault !== tabName}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const searchParamsChange = new EventTarget();

function useSearchParamsState(queryKey: string) {
  const value = useSyncExternalStore(
    (onStorechange) => {
      searchParamsChange.addEventListener("change", onStorechange);
      return () => searchParamsChange.removeEventListener("change", onStorechange);
    },
    () => {
      const url = new URL(location.href);
      return url.searchParams.get(queryKey);
    },
    () => null
  );

  const setValue = useCallback((newValue: string) => {
    const url = new URL(location.href);
    url.searchParams.set(queryKey, newValue);
    history.replaceState(null, "", url.href);
    searchParamsChange.dispatchEvent(new Event("change"));
  }, [queryKey]);

  return [value, setValue] as const;
}
