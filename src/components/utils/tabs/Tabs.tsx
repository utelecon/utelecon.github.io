import styles from "./Tabs.module.scss"

export default function Tabs(props: {
  queryKey: string;
  [key: `tab.${string}`]: React.ReactNode;
  [key: `panel.${string}`]: React.ReactNode;
}) {
  const [selectedTab, setSelectedTab] = useSearchParamsState(props.queryKey);

  const tabs = Object.entries(props).filter(([key]) => key.startsWith("tab."));
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
              aria-selected={selectedTab === tabName}
              data-tab={tabName}
              data-default={tabName === "default" ? true : null}
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
              data-tab={tabName}
              data-default={tabName === "default" ? true : null}
              hidden={selectedTab !== tabName}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useCallback, useId, useSyncExternalStore } from "react";

const searchParamsChange = new EventTarget();

function useSearchParamsState(queryKey: string) {
  const value = useSyncExternalStore(
    (onStorechange) => {
      searchParamsChange.addEventListener("change", onStorechange);
      return () => searchParamsChange.removeEventListener("change", onStorechange);
    },
    () => {
      const url = new URL(location.href);
      return url.searchParams.get(queryKey) ?? "default";
    },
    () => "default"
  );

  const setValue = useCallback((newValue: string) => {
    const url = new URL(location.href);
    url.searchParams.set(queryKey, newValue);
    history.replaceState(null, "", url.href);
    searchParamsChange.dispatchEvent(new Event("change"));
  }, [queryKey]);

  return [value, setValue] as const;
}
