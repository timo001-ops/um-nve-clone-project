import { isDefined } from '../utils/utils';
export class ProgressHelper {
  getRange(min, max) {
    if (min >= max || Number.isNaN(min) || Number.isNaN(max)) {
      console.debug('Invalid min and max. The max and min defaults will be used.');
      return { min: 0, max: 100 };
    }
    return { min, max };
  }
  getLabel(label, indeterminate, progressPercentage) {
    return label ? label : !indeterminate ? `${progressPercentage}%` : '';
  }
  getProgressPercentage(range, progress) {
    progress = !isDefined(progress) || Number.isNaN(progress) ? 0 : progress;
    const percentage = Math.floor(100 * (progress - range.min) / (range.max - range.min));
    return Math.min(Math.max(0, percentage), 100);
  }
  getAccessibilityLabel(accessibilityLabel, label) {
    return accessibilityLabel ? accessibilityLabel : label;
  }
}
//# sourceMappingURL=ProgressHelper.js.map
