interface include {
  type: string;
  heading: string;
  procedure: string;
}

interface Props {
  part?: string;
  pageSlug?: string;
  include: include;
  system: string;
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

export default function Important({ part, pageSlug, include, system }: Props) {
  if (part != "important" && (pageSlug == "oc" || pageSlug == "faculty_members")) {
    return (
      <li>
        <details>
          <summary>
            （再掲）
            <Point part={part} include={include} system={system} />
          </summary>
          {include.procedure}
        </details>
      </li>
    );
  } else {
    return (
      <li>
        <Point part={part} include={include} system={system} />
        {include.procedure}
      </li>
    );
  }
}