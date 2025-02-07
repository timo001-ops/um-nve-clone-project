export function throttle(throttledFunction, delay) {
  let isThrottling = false;
  return function (...args) {
    if (!isThrottling) {
      throttledFunction(...args);
      isThrottling = true;
      setTimeout(function () {
        isThrottling = false;
      }, delay);
    }
  };
}
//# sourceMappingURL=Throttle.js.map
