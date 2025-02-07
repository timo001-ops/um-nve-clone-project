import { isDefined } from '../utils/utils';
export class TypeHelper {
  isValidType(supportedTypes, type) {
    return supportedTypes.includes(type);
  }
  validateType(supportedTypes, type) {
    if (isDefined(type) && !this.isValidType(supportedTypes, type)) {
      console.debug(`Type ${type} not supported. Supported types: ${supportedTypes.join(', ')}`);
    }
  }
}
//# sourceMappingURL=TypeHelper.js.map
