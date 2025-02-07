import { ComponentWillLoad } from '../../stencil-public-runtime';
export declare class SoulFileIcon implements ComponentWillLoad {
  format: string;
  status: 'positive' | 'warning' | 'critical' | 'not-allowed' | 'waiting';
  size: 's' | 'm' | 'l' | 'xl' | '2-xl' | '3-xl';
  inline: boolean;
  reference: boolean;
  el: HTMLElement;
  private iconMap;
  private supportedSizes;
  private supportedStatuses;
  private assetsFolder;
  private statusHelper;
  private sizeHelper;
  sizeChange(newValue: string): void;
  statusChange(newValue: string): void;
  componentWillLoad(): void;
  render(): any;
}
