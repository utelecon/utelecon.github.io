import type { Step } from "@components/types";

export type Key = "select" | "ms_auth" | "auth_app" | "phone" | "fido";

declare global {
  /** API for TabSelector to edit Tabs */
  var onselecttab: (step: Step, tab: Key) => void;
}

let current: {
  [step: string]: { button: HTMLElement; panel: HTMLElement };
} = {};

function changePanel(button: HTMLElement) {
  const [step] = button.id.split("-");
  if (current[step]) {
    current[step].button.ariaSelected = "false";
    current[step].panel.hidden = true;
  }
  current[step] = {
    button,
    panel: document.getElementById(button.getAttribute("aria-controls")!)!,
  };
  current[step].button.ariaSelected = "true";
  current[step].panel.hidden = false;
}

function replaceSearchParams(step: string, key: string) {
  const url = new URL(location.href);
  url.searchParams.set(step, key);
  history.replaceState(null, "", url.href);
}

export function onClick(this: HTMLButtonElement) {
  changePanel(this);
  const [step, _, key] = this.id.split("-");
  replaceSearchParams(step, key);
}

export function onSelectTab(step: string, key: string) {
  const button = document.getElementById(
    `${step}-tab-${key}`
  ) as HTMLButtonElement | null;
  if (!button) return;
  changePanel(button);
  replaceSearchParams(step, key);
}

const searchParams = new URLSearchParams(location.search);
for (const step of ["first", "alt"]) {
  const key = searchParams.get(step) ?? "select";
  onSelectTab(step, key);
}
