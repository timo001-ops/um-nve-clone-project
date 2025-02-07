import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class SoulMarkdownContent implements ComponentInterface {
  url: string;
  value: string;
  scale: 's' | 'm' | 'l';
  trustContent: boolean;
  soulMarkdownConverted: EventEmitter<string>;
  private convertedValue;
  private converter;
  constructor();
  onDisabledChange(): void;
  componentWillLoad(): Promise<void> | void;
  render(): any;
  private updateInnerHTML;
  private convertMarkdownToHTML;
}
