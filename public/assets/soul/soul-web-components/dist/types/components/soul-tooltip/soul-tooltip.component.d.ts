import { JSX, ComponentDidLoad } from '../../stencil-public-runtime';
export declare class SoulTooltipComponent implements ComponentDidLoad {
  position: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
  status: 'warning' | 'critical';
  triggerId: string;
  text: string;
  triggerElement: HTMLElement;
  private tooltipElement;
  private tooltipHelper;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  render(): JSX.Element;
  private get hideTooltip();
  private initializeTooltipHelper;
  private setTooltipPosition;
  private getTriggerElement;
}
