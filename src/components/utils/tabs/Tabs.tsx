export default function Tabs(props: {
  id: string;
  groupName: string;
  [key: string]: React.ReactNode;
}) {
  const { id, groupName } = props;
  if (!id || !groupName) {
    throw new Error("Tabs requires id and groupName props");
  }
  if (id.includes("_")) {
    throw new Error("Tabs id cannot contain underscores");
  }

  const tabs = Object.entries(props).filter(([key]) => key.startsWith("tab-"));
  const panels = Object.entries(props).filter(([key]) =>
    key.startsWith("panel-"),
  );

  return (
    <div className="generic-tabgroup" data-group={groupName}>
      <div className="tab-list" role="tablist">
        {tabs.map(([key, element]) => {
          const tabName = key.replace(/^tab-/, "");
          return (
            <button
              key={key}
              id={`tab_${id}_${tabName}`}
              type="button"
              role="tab"
              aria-controls={`panel_${id}_${tabName}`}
              aria-selected="false"
              className="tab"
              data-tab={tabName}
            >
              {element}
            </button>
          );
        })}
      </div>
      <div className="panel-list">
        {panels.map(([key, element]) => {
          const tabName = key.replace(/^panel-/, "");
          return (
            <div
              key={key}
              id={`panel_${id}_${tabName}`}
              role="tabpanel"
              aria-labelledby={`tab_${id}_${tabName}`}
              className="panel"
              data-tab={tabName}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
