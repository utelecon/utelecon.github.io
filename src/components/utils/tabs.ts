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

function onClick(this: HTMLButtonElement) {
  changePanel(this);
  const [step, _, key] = this.id.split("-");
  replaceSearchParams(step, key);
}

const steps = ["first", "alt"] as const;
const buttons: HTMLButtonElement[] = [];
for (const step of steps) {
  buttons.push(
    ...document.querySelectorAll<HTMLButtonElement>(`button[id^=${step}-tab]`)
  );
}
buttons.forEach((button) => button.addEventListener("click", onClick));

function onSelectTab(step: string, key: string) {
  const button = document.getElementById(
    `${step}-tab-${key}`
  ) as HTMLButtonElement | null;
  if (!button) return;
  changePanel(button);
  replaceSearchParams(step, key);
}

const searchParams = new URLSearchParams(location.search);
for (const step of steps) {
  const key = searchParams.get(step) ?? "select";
  onSelectTab(step, key);
}

window.onselecttab = onSelectTab;
