import { isDefined } from '../utils/utils';
export class StatusHelper {
  isValidStatus(supportedStatuses, status) {
    return supportedStatuses.includes(status);
  }
  validateStatus(supportedStatuses, status) {
    if (isDefined(status) && !this.isValidStatus(supportedStatuses, status)) {
      console.debug(`Status ${status} not supported. Supported statuses: ${supportedStatuses.join(', ')}`);
    }
  }
}
//# sourceMappingURL=StatusHelper.js.map
