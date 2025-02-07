export declare class ProgressHelper {
  getRange(min: number, max: number): ProgressRange;
  getLabel(label: string, indeterminate: boolean, progressPercentage: number): string;
  getProgressPercentage(range: ProgressRange, progress: number): number;
  getAccessibilityLabel(accessibilityLabel: string, label: string): string;
}
export type ProgressRange = {
  min: number;
  max: number;
};
