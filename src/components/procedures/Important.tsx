interface Include {
  type: string;
  heading: string;
}

interface Props {
  part?: string;
  pageSlug?: string;
  include: Include;
  system: string;
  children?: string | JSX.Element | JSX.Element[];
}

function Point({ part, include, system }: Props) {
  return (
    <strong>
      {part != "important" ? <>{system}</> : <>{include.type}</>}
      ：
      {include.heading}
    </strong>
  );
}

export default function Important({ part, pageSlug, include, system, children }: Props) {
  if (part != "important" && (pageSlug == "oc" || pageSlug == "faculty_members")) {
    return (
      <li>
        <details>
          <summary>
            （再掲）
            <Point part={part} include={include} system={system} />
          </summary>
          {children}
        </details>
      </li>
    );
  } else {
    return (
      <li>
        <Point part={part} include={include} system={system} />
        {children}
      </li>
    );
  }
}