import { isDefined } from '../utils/utils';
export class PositionHelper {
  isValidPosition(supportedPositions, position) {
    return supportedPositions.includes(position);
  }
  validatePosition(supportedPositions, position) {
    if (isDefined(position) && !this.isValidPosition(supportedPositions, position)) {
      console.debug(`Position ${position} not supported. Supported types: ${supportedPositions.join(', ')}`);
    }
  }
}
//# sourceMappingURL=PositionHelper.js.map
