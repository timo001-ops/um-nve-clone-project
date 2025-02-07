import { ComponentDidLoad, ComponentWillLoad } from '../../stencil-public-runtime';
export declare class SoulOptionGroup implements ComponentDidLoad, ComponentWillLoad {
  label: string;
  disabled?: boolean;
  hidden?: boolean;
  hostElement: HTMLElement;
  private optionsElement;
  private mutationObserver;
  componentWillLoad(): Promise<void> | void;
  componentDidLoad(): void;
  onDisabledChanged(): void;
  onHiddenChanged(): void;
  render(): any;
  private onSlotChanged;
}
