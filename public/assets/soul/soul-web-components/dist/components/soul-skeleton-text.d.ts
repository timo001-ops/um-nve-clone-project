import type { Components, JSX } from "../types/components";

interface SoulSkeletonText extends Components.SoulSkeletonText, HTMLElement {}
export const SoulSkeletonText: {
  prototype: SoulSkeletonText;
  new (): SoulSkeletonText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
