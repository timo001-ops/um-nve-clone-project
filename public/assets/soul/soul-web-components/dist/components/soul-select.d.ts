import type { Components, JSX } from "../types/components";

interface SoulSelect extends Components.SoulSelect, HTMLElement {}
export const SoulSelect: {
  prototype: SoulSelect;
  new (): SoulSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
