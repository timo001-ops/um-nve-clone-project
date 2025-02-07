import type { Components, JSX } from "../types/components";

interface SoulIcon extends Components.SoulIcon, HTMLElement {}
export const SoulIcon: {
  prototype: SoulIcon;
  new (): SoulIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
