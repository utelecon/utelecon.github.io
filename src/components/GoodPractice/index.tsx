import { useReducer } from "react";

interface Filter {
  label: string;
  value: Lowercase<string>;
}

const FORMATS = [
  { label: "リアルタイムオンライン", value: "realtime_online" },
  { label: "オンデマンド", value: "ondemand" },
] satisfies Filter[];
type Format = (typeof FORMATS)[number]["value"];

const NUMBERS = [
  { label: "101名以上", value: "mt100" },
  { label: "30名以上100名未満", value: "mt30-lt100" },
  { label: "30名未満", value: "lt30" },
] satisfies Filter[];
type Number = (typeof NUMBERS)[number]["value"];

const TOOLS = [
  { label: "ITC-LMS", value: "itc-lms" },
  { label: "Google Classroom", value: "google-classroom" },
  { label: "Slack", value: "slack" },
  "br",
  { label: "Zoom", value: "zoom" },
  { label: "Webex", value: "webex" },
  { label: "Google Meet", value: "google-meet" },
  "br",
  { label: "Google Document", value: "google-document" },
  { label: "Google Sheets", value: "google-sheets" },
  { label: "Google Slides", value: "google-slides" },
  { label: "Google Forms", value: "google-forms" },
  "br",
  { label: "Slido", value: "slido" },
  { label: "LINE", value: "line" },
  "br",
  { label: "iMovie", value: "imovie" },
  { label: "YouTube", value: "youtube" },
  "br",
  { label: "Adobe Captivate", value: "adobe-captivate" },
  { label: "Adobe Illustrator", value: "a-illustrator" },
  "br",
  { label: "OneNote", value: "onenote" },
  { label: "GoodNotes", value: "goodnotes" },
  "br",
  { label: "Comment Screen", value: "comment-screen" },
] satisfies (Filter | "br")[];
type Tool = Extract<(typeof TOOLS)[number], Filter>["value"];

const KEYWORDS = [
  { label: "板書", value: "hand-writing" },
  { label: "実験・実習", value: "experiment" },
  { label: "グループワーク", value: "group-work" },
  { label: "TA", value: "ta" },
] satisfies Filter[];
type Keyword = (typeof KEYWORDS)[number]["value"];

export interface Interview {
  path: string;
  filters: InterviewFilters;
  componentProps: InterviewComponentProps;
}

interface InterviewFilters {
  format: Format[];
  number: Number;
  tools: Tool[];
  keywords: Keyword[];
}

interface InterviewComponentProps {
  title: string;
  point: string;
  tools: string;
}

interface Action<T extends string> {
  checked: boolean;
  value: T;
}

function reducer<T extends string>(
  state: Set<T>,
  { checked, value }: Action<T>
): Set<T> {
  const newSet = new Set(state);
  newSet[checked ? "add" : "delete"](value);
  return newSet;
}

export default function GoodPractice({
  interviews,
}: {
  interviews: Interview[];
}) {
  const [formats, dispatchFormats] = useReducer(
    reducer<Format>,
    new Set<Format>()
  );
  const [numbers, dispatchNumbers] = useReducer(
    reducer<Number>,
    new Set<Number>()
  );
  const [tools, dispatchTools] = useReducer(reducer<Tool>, new Set<Tool>());
  const [keywords, dispatchKeywords] = useReducer(
    reducer<Keyword>,
    new Set<Keyword>()
  );

  const filteredInterviews = interviews.filter(
    (interview) =>
      (formats.size === 0 ||
        interview.filters.format.some((f) => formats.has(f))) &&
      (numbers.size === 0 || numbers.has(interview.filters.number)) &&
      (tools.size === 0 || interview.filters.tools.some((t) => tools.has(t))) &&
      (keywords.size === 0 ||
        interview.filters.keywords.some((k) => keywords.has(k)))
  );

  return (
    <>
      <form>
        <GoodPracticeFormInput
          filters={FORMATS}
          values={formats}
          dispatch={dispatchFormats}
          name="format"
          label="形態"
        />
        <GoodPracticeFormInput
          filters={NUMBERS}
          values={numbers}
          dispatch={dispatchNumbers}
          name="number"
          label="学生数"
        />
        <GoodPracticeFormInput
          filters={TOOLS}
          values={tools}
          dispatch={dispatchTools}
          name="tool"
          label="ツール"
        />
        <GoodPracticeFormInput
          filters={KEYWORDS}
          values={keywords}
          dispatch={dispatchKeywords}
          name="keyword"
          label="タグ"
        />
      </form>
      <br />
      <div>
        {filteredInterviews.map(({ path, componentProps }) => (
          <InterviewListItem key={path} path={path} {...componentProps} />
        ))}
      </div>
    </>
  );
}

function GoodPracticeFormInput<T extends Filter>({
  filters,
  values,
  dispatch,
  name,
  label,
}: {
  filters: (T | "br")[];
  values: Set<T["value"]>;
  dispatch: React.Dispatch<Action<T["value"]>>;
  name: string;
  label: string;
}) {
  return (
    <div>
      <span>{label}:</span>
      {filters.map((filter, i) =>
        filter === "br" ? (
          <br key={i} />
        ) : (
          <label key={filter.value} style={{ margin: "8px" }}>
            <input
              type="checkbox"
              name={name}
              value={filter.value}
              checked={values.has(filter.value)}
              onChange={({ target: { checked } }) =>
                dispatch({ checked, value: filter.value })
              }
            />
            {filter.label}
          </label>
        )
      )}
    </div>
  );
}

function InterviewListItem({
  path,
  title,
  point,
  tools,
}: InterviewComponentProps & { path: string }) {
  return (
    <li>
      <a href={path}>{title}</a>
      <br />
      <ul>
        <li>ポイント: {point}</li>
        <li>利用ツール:{tools}</li>
      </ul>
    </li>
  );
}
