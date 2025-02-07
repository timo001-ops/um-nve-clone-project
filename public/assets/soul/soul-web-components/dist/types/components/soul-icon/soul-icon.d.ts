import { ComponentWillLoad } from '../../stencil-public-runtime';
import { HostElement } from '../../stencil-public-runtime';
export declare class SoulIcon implements ComponentWillLoad {
  name: string;
  size: '2-xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2-xl' | '3-xl';
  inline: boolean;
  color: 'primary' | 'secondary' | 'reduced';
  iconStackUrl: string;
  hostElement: HostElement;
  private supportedSizes;
  private supportedColors;
  private sizeHelper;
  private assetsFolder;
  private iconUrl;
  nameChange(): void;
  sizeChange(newValue: string): void;
  colorChange(newValue: string): void;
  render(): any;
  componentWillLoad(): Promise<void> | void;
  private setIconUrl;
  private validateColors;
}
