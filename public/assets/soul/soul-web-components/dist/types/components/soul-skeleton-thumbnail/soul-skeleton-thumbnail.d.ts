import { HostElement } from '../../stencil-public-runtime';
export declare class SoulSkeletonThumbnail {
  size: 's' | 'm' | 'l' | 'xl';
  shape: 'circle' | 'square';
  hostElement: HostElement;
  private supportedSizes;
  sizeChange(newValue: string): void;
  private validateSize;
  render(): any;
}
