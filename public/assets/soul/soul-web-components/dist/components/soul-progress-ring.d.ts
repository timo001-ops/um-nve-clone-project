import type { Components, JSX } from "../types/components";

interface SoulProgressRing extends Components.SoulProgressRing, HTMLElement {}
export const SoulProgressRing: {
  prototype: SoulProgressRing;
  new (): SoulProgressRing;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
