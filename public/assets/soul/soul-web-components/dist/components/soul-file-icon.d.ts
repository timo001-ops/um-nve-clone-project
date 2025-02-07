import type { Components, JSX } from "../types/components";

interface SoulFileIcon extends Components.SoulFileIcon, HTMLElement {}
export const SoulFileIcon: {
  prototype: SoulFileIcon;
  new (): SoulFileIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
