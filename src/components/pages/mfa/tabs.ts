export type Step = "first" | "alt";
export type Group = "intent" | Step;
export type Selection = "selector" | "ms_auth" | "auth_app" | "phone" | "fido";
export type Labels = Partial<Record<Selection, string>>;

type Listener = (step: string, selection: string) => void;
const listeners: Listener[] = [];

export function onChangeTab(listener: Listener) {
  listeners.push(listener);
}

export function emitChangeTab(step: string, selection: string | null) {
  if (!["first", "alt"].includes(step)) return;

  selection ??= "selector";
  if (!["selector", "ms_auth", "auth_app", "phone", "fido"].includes(selection))
    selection = "selector";

  for (const listener of listeners) {
    listener(step, selection);
  }
}

onChangeTab((step, selection) => {
  const url = new URL(location.href);
  if (selection === "selector") url.searchParams.delete(step);
  else url.searchParams.set(step, selection);
  history.replaceState(null, "", url.href);
});

document.addEventListener("DOMContentLoaded", () => {
  for (const step of ["first", "alt"]) {
    const url = new URL(location.href);
    const selection = url.searchParams.get(step);
    emitChangeTab(step, selection);
  }
});
