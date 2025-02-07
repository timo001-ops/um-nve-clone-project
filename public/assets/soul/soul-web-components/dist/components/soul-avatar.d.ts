import type { Components, JSX } from "../types/components";

interface SoulAvatar extends Components.SoulAvatar, HTMLElement {}
export const SoulAvatar: {
  prototype: SoulAvatar;
  new (): SoulAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
