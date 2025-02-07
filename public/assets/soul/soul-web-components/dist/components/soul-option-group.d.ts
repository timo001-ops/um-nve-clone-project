import type { Components, JSX } from "../types/components";

interface SoulOptionGroup extends Components.SoulOptionGroup, HTMLElement {}
export const SoulOptionGroup: {
  prototype: SoulOptionGroup;
  new (): SoulOptionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
