import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class SoulTableWrapper implements ComponentInterface {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  soulTableSizeChange: EventEmitter<'xs' | 's' | 'm' | 'l' | 'xl'>;
  soulTableFullSize: EventEmitter<void>;
  private hostElement;
  private resizeObserver;
  private currentSize;
  private breakpoints;
  private tableSlot;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  onChange(): void;
  render(): any;
  private setBreakpoints;
  private buildDescendingOrderBreakpoints;
  private checkSize;
  private updateSizeClass;
  private addSizeClass;
  private removeSizeClass;
  private getBreakpointsKeys;
  private getClassForSize;
  private isBreakpointKey;
}
