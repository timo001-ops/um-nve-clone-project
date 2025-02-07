import type { Components, JSX } from "../types/components";

interface SoulTableWrapper extends Components.SoulTableWrapper, HTMLElement {}
export const SoulTableWrapper: {
  prototype: SoulTableWrapper;
  new (): SoulTableWrapper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
