import { ComponentWillLoad } from '../../stencil-public-runtime';
export declare class SoulProgressBar implements ComponentWillLoad {
  label: string;
  progress: number;
  min: number;
  max: number;
  hideLabel: boolean;
  indeterminate: boolean;
  status: 'warning' | 'positive' | 'critical';
  color: 'neutral' | 'primary';
  private supportedStatuses;
  private progressHelper;
  private statusHelper;
  private range;
  componentWillLoad(): Promise<void> | void;
  rangeValueChange(): void;
  statusChange(newValue: string): void;
  render(): any;
  private hasLabel;
}
