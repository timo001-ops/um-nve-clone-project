import { i as isDefined } from './utils.js';

class StatusHelper {
  isValidStatus(supportedStatuses, status) {
    return supportedStatuses.includes(status);
  }
  validateStatus(supportedStatuses, status) {
    if (isDefined(status) && !this.isValidStatus(supportedStatuses, status)) {
      console.debug(`Status ${status} not supported. Supported statuses: ${supportedStatuses.join(', ')}`);
    }
  }
}

export { StatusHelper as S };

//# sourceMappingURL=StatusHelper.js.map