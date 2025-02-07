import { Placement } from '@floating-ui/dom';
export declare class TooltipHelper {
  private reference;
  private tooltip;
  private tooltipPosition;
  private stopAutoUpdate;
  constructor(reference: HTMLElement, tooltip: HTMLElement);
  showTooltip: () => void;
  hideTooltip: () => void;
  connect(): void;
  disconnect(): void;
  setTooltipPosition(position: Placement): void;
  private addTriggerEventListeners;
  private removeTriggerEventListeners;
  private canHideTooltip;
}
