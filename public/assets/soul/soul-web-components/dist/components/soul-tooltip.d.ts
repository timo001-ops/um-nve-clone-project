import type { Components, JSX } from "../types/components";

interface SoulTooltip extends Components.SoulTooltip, HTMLElement {}
export const SoulTooltip: {
  prototype: SoulTooltip;
  new (): SoulTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
