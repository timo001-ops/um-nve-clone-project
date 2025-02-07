import type { Components, JSX } from "../types/components";

interface SoulSkeletonTable extends Components.SoulSkeletonTable, HTMLElement {}
export const SoulSkeletonTable: {
  prototype: SoulSkeletonTable;
  new (): SoulSkeletonTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
