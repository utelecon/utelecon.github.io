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
