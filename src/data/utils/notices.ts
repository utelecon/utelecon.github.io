import notices from "@data/notice.yml";
import type { Notice } from "@data/schemas/notice";

export interface NoticeWithId extends Notice {
  id: string;
}

export function getISODateString(date: Date) {
  return date.toISOString().split("T")[0];
}

export function getLocaleDateString(
  date: Date,
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions | Intl.DateTimeFormatOptions["dateStyle"]
) {
  return date.toLocaleDateString(
    locales,
    options === undefined || typeof options !== "string"
      ? options
      : { dateStyle: options }
  );
}

const noticesWithIdReversed: NoticeWithId[] = [];
const dateAutoincrementMap = new Map<string, number>();

for (const notice of (notices as Notice[]).toReversed()) {
  if (!notice.content.ja) continue;

  const date = getISODateString(notice.date);
  const i = dateAutoincrementMap.get(date) ?? 0;
  dateAutoincrementMap.set(date, i + 1);

  const id = `${date}-${i}`;
  noticesWithIdReversed.push({ ...notice, id });
}

const noticesWithId = noticesWithIdReversed.toReversed();

export { noticesWithIdReversed, noticesWithId };
