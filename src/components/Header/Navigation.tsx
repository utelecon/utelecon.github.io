import * as nav from "../../data/nav";
import style from "./navigation.module.scss";

interface Props {
  lang: "ja" | "en";
}

export default function Navigation({ lang }: Props) {
  return (
    <nav className={style.header}>
      <ul>
        {nav[lang].map((row, i) => (
          <li key={i}>
            <div>{row.name}</div>
            <ul>
              {row.contents.map((content, j) => (
                <li key={j}>{content}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
