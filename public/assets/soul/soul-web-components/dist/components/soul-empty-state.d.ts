import type { Components, JSX } from "../types/components";

interface SoulEmptyState extends Components.SoulEmptyState, HTMLElement {}
export const SoulEmptyState: {
  prototype: SoulEmptyState;
  new (): SoulEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
