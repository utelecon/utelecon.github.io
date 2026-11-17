import { useCallback, useId, useSyncExternalStore } from "react";
import styles from "./Tabs.module.scss"

export default function Tabs(props: {
  queryKey: string;
  defaultTab: string;
  /**
   * タブの表示順（タブ名の配列）．
   * Astro は slot をレンダリング完了順に props へ格納するため，記述順が保持されない場合がある．
   * 指定した場合はこの順に並べ替える（未指定のタブは末尾に元の順で並ぶ）．
   */
  order?: string[];
  [key: `tab.${string}`]: React.ReactNode;
  [key: `panel.${string}`]: React.ReactNode;
}) {
  if (!props.queryKey || !props.defaultTab) {
    throw new Error("props.queryKey and props.defaultTab are required")
  }

  const [selectedTab, setSelectedTab] = useSearchParamsState(props.queryKey);
  const selectedTabWithDefault = selectedTab ?? props.defaultTab;

  const rank = (name: string) => {
    const i = props.order?.indexOf(name) ?? -1;
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  const tabs = Object.entries(props)
    .filter(([key]) => key.startsWith("tab."))
    .sort(
      ([a], [b]) =>
        rank(a.replace(/^tab\./, "")) - rank(b.replace(/^tab\./, "")),
    );
  const panels = Object.entries(props).filter(([key]) =>
    key.startsWith("panel."),
  );

  const baseId = useId();

  return (
    <div className={styles["tabs"]}>
      <div className={styles["tab-list"]} role="tablist">
        {tabs.map(([key, element]) => {
          const tabName = key.replace(/^tab\./, "");
          return (
            <button
              key={key}
              id={`${baseId}-tab-${tabName}`}
              type="button"
              role="tab"
              aria-controls={`${baseId}-panel-${tabName}`}
              aria-selected={selectedTabWithDefault === tabName}
              onClick={() => {
                setSelectedTab(tabName)
              }}
            >
              {element}
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
