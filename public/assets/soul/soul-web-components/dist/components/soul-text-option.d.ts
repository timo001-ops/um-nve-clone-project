import type { Components, JSX } from "../types/components";

interface SoulTextOption extends Components.SoulTextOption, HTMLElement {}
export const SoulTextOption: {
  prototype: SoulTextOption;
  new (): SoulTextOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
