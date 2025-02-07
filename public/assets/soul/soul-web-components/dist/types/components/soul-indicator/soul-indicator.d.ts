import { HostElement } from '../../stencil-public-runtime';
export declare class SoulIndicator {
  type: 'positive' | 'warning' | 'not-allowed' | 'critical' | 'info' | 'help' | 'waiting' | 'locked' | 'experimental';
  size: 's' | 'm';
  inline: boolean;
  border: boolean;
  hostElement: HostElement;
  private sizeHelper;
  private supportedSizes;
  sizeChange(newValue: string): void;
  render(): any;
}
