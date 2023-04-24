// BEGIN
export default forEachWithContext = (collection, callback) => {
    for (const item of collection) {
      callback.call(item);
    }
  }
// END
