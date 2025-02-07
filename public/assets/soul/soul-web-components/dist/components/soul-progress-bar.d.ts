import type { Components, JSX } from "../types/components";

interface SoulProgressBar extends Components.SoulProgressBar, HTMLElement {}
export const SoulProgressBar: {
  prototype: SoulProgressBar;
  new (): SoulProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
