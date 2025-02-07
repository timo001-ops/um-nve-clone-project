import type { Components, JSX } from "../types/components";

interface SoulModal extends Components.SoulModal, HTMLElement {}
export const SoulModal: {
  prototype: SoulModal;
  new (): SoulModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
