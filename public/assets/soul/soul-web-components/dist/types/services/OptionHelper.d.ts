export declare class OptionHelper {
  private onSelectedChange;
  private slots;
  private slotObserver;
  constructor(onSelectedChange: () => void, slots: HTMLSlotElement[]);
  cloneSlotsContent(): HTMLElement[];
  onSelectChange(selected: boolean): void;
  disconnect(): void;
  private observeSlotElements;
  private onSlotChange;
}
