import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class SoulTextOption implements ComponentInterface {
  additionalText: string;
  disabled: boolean;
  hidden: boolean;
  highlighted: boolean;
  passive: boolean;
  selected: boolean;
  dataSelected: boolean;
  text: string;
  nonFilterable: boolean;
  readonly instanceId: string;
  value: any;
  soulOptionChange: EventEmitter<SoulTextOption>;
  soulOptionClick: EventEmitter<SoulTextOption>;
  soulOptionHover: EventEmitter<SoulTextOption>;
  soulOptionSelectChange: EventEmitter<SoulTextOption>;
  private iconSlot;
  private infoSlot;
  private textOptionElement;
  private optionHelper;
  private hostElement;
  componentDidLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  clone(): Promise<HTMLSoulTextOptionElement>;
  match(term: string): Promise<boolean>;
  onChange(): void;
  onSelectedChange(): void;
  render(): any;
  private onMouseMove;
  private onMouseDown;
  private isOptionDisabled;
  private setIconSlotVisibility;
}
