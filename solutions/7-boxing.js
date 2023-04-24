// BEGIN
export default sum = (...arg) => {
    const currentSum = arg.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  
    function innerSum(...innerArgs) {
      return sum(currentSum, ...innerArgs);
    }

    innerSum.valueOf = () => currentSum;
  
    return innerSum;
  }
// END
