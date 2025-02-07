export declare class SoulEmptyState {
  heading: string;
  text: string;
  helpText: string;
  size: 's' | 'm';
  private supportedSizes;
  private actionSlot;
  private additionalActionSlot;
  hideEmptySlot(slot: HTMLSlotElement): void;
  sizeChange(newValue: string): void;
  private validateSize;
  render(): any;
}
