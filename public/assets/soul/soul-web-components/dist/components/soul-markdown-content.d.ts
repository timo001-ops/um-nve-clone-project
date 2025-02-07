import type { Components, JSX } from "../types/components";

interface SoulMarkdownContent extends Components.SoulMarkdownContent, HTMLElement {}
export const SoulMarkdownContent: {
  prototype: SoulMarkdownContent;
  new (): SoulMarkdownContent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
