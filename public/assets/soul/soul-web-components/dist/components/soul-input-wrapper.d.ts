import type { Components, JSX } from "../types/components";

interface SoulInputWrapper extends Components.SoulInputWrapper, HTMLElement {}
export const SoulInputWrapper: {
  prototype: SoulInputWrapper;
  new (): SoulInputWrapper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
