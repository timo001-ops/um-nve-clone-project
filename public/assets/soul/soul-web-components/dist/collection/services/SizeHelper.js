export class SizeHelper {
  validateSize(supportedSizes, size) {
    if (!this.isValidSize(supportedSizes, size)) {
      console.debug(`Size ${size} not supported. Supported sizes: ${supportedSizes.join(', ')}`);
    }
  }
  isValidSize(supportedSizes, size) {
    return supportedSizes.includes(size);
  }
}
//# sourceMappingURL=SizeHelper.js.map
