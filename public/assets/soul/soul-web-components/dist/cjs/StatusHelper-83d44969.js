'use strict';

const utils = require('./utils-b4bbc9bf.js');

class StatusHelper {
  isValidStatus(supportedStatuses, status) {
    return supportedStatuses.includes(status);
  }
  validateStatus(supportedStatuses, status) {
    if (utils.isDefined(status) && !this.isValidStatus(supportedStatuses, status)) {
      console.debug(`Status ${status} not supported. Supported statuses: ${supportedStatuses.join(', ')}`);
    }
  }
}

exports.StatusHelper = StatusHelper;

//# sourceMappingURL=StatusHelper-83d44969.js.map