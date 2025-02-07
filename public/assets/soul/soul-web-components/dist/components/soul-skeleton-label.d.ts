import type { Components, JSX } from "../types/components";

interface SoulSkeletonLabel extends Components.SoulSkeletonLabel, HTMLElement {}
export const SoulSkeletonLabel: {
  prototype: SoulSkeletonLabel;
  new (): SoulSkeletonLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
