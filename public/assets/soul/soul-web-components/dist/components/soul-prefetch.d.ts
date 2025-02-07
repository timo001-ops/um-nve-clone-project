import type { Components, JSX } from "../types/components";

interface SoulPrefetch extends Components.SoulPrefetch, HTMLElement {}
export const SoulPrefetch: {
  prototype: SoulPrefetch;
  new (): SoulPrefetch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
