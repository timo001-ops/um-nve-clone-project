import { EventEmitter } from '../../stencil-public-runtime';
export declare class SoulBenefitModal {
  open: boolean;
  closeWithEsc: boolean;
  closeButton: boolean;
  heading: string;
  description: string;
  soulClose: EventEmitter<void>;
  private dialog;
  private readonly CLOSING_ANIMATION_CLASS;
  show(): Promise<void>;
  close(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
  private toggleDialog;
  private emitCloseEvent;
  private addCancelListener;
  private animateClose;
}
