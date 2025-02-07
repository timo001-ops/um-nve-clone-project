import type { Components, JSX } from "../types/components";

interface SoulSkeletonKeyValue extends Components.SoulSkeletonKeyValue, HTMLElement {}
export const SoulSkeletonKeyValue: {
  prototype: SoulSkeletonKeyValue;
  new (): SoulSkeletonKeyValue;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
