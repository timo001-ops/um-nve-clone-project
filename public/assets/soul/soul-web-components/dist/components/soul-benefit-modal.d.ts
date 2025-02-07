import type { Components, JSX } from "../types/components";

interface SoulBenefitModal extends Components.SoulBenefitModal, HTMLElement {}
export const SoulBenefitModal: {
  prototype: SoulBenefitModal;
  new (): SoulBenefitModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
