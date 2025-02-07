import { ComponentWillLoad } from '../../stencil-public-runtime';
export declare class SoulProgressRing implements ComponentWillLoad {
  size: 's' | 'm' | 'l';
  indeterminate: boolean;
  progress: number;
  min: number;
  max: number;
  label: string;
  accessibilityLabel: string;
  hideLabel: boolean;
  status: 'warning' | 'positive' | 'critical';
  color: 'neutral' | 'primary';
  private supportedStatuses;
  private supportedSizes;
  private progressHelper;
  private statusHelper;
  private sizeHelper;
  private range;
  private radiusBySize;
  private readonly DEFAULT_SIZE;
  componentWillLoad(): Promise<void> | void;
  rangeValueChange(): void;
  statusChange(newValue: string): void;
  sizeChange(newValue: string): void;
  render(): any;
  private hasLabel;
}
