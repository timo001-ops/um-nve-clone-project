import type { Components, JSX } from "../types/components";

interface SoulSkeletonThumbnail extends Components.SoulSkeletonThumbnail, HTMLElement {}
export const SoulSkeletonThumbnail: {
  prototype: SoulSkeletonThumbnail;
  new (): SoulSkeletonThumbnail;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
