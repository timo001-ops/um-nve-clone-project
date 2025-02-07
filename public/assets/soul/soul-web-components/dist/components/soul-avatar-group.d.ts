import type { Components, JSX } from "../types/components";

interface SoulAvatarGroup extends Components.SoulAvatarGroup, HTMLElement {}
export const SoulAvatarGroup: {
  prototype: SoulAvatarGroup;
  new (): SoulAvatarGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
