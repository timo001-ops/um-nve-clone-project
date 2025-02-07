import type { Components, JSX } from "../types/components";

interface SoulIndicator extends Components.SoulIndicator, HTMLElement {}
export const SoulIndicator: {
  prototype: SoulIndicator;
  new (): SoulIndicator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
