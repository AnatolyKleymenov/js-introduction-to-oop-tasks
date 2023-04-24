// BEGIN
export default fnWithContext = (obj, fn) => {
    return function (...arg) {
      return fn.apply(obj, arg);
    };
  }
// END