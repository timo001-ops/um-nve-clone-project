export declare class PopoverHelper {
  private stopAutoUpdate;
  private popoverSupported;
  private readonly DISTANCE_REFERENCE_FLOATING;
  connect(reference: HTMLElement, floating: HTMLElement, maxHeight: string): void;
  disconnect(): void;
  private setPopoverSupport;
  private isPopoverInModal;
  private isPopoverSupported;
  private getModalParent;
}
