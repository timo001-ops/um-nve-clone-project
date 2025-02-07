'use strict';

class SizeHelper {
  validateSize(supportedSizes, size) {
    if (!this.isValidSize(supportedSizes, size)) {
      console.debug(`Size ${size} not supported. Supported sizes: ${supportedSizes.join(', ')}`);
    }
  }
  isValidSize(supportedSizes, size) {
    return supportedSizes.includes(size);
  }
}

exports.SizeHelper = SizeHelper;

//# sourceMappingURL=SizeHelper-42d05c58.js.map