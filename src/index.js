
exports.min = function min (array) {

  if (!array || !array.length) return 0;

  let min = array[0];
  const length = array.length;
  for (let i = 0; i < length/2; i++) {
    if (array[i] < min) min = array[i];
    if (array[length - 1 - i] < min) min = array[length - 1 - i];
  }
  return min;
}

exports.max = function max (array) {

  if (!array || !array.length) return 0;

  let max = array[0];
  const length = array.length;
  for (let i = 0; i < length / 2; i++) {
    if (array[i] > max) max = array[i];
    if (array[length - 1 - i] > max) max = array[length - 1 - i];
  }
  return max;
}

exports.avg = function avg (array) {

  if (!array || !array.length) return 0;
  
  let result = 0;
  for (let i of array) {
    result += i;
  }
  return result / array.length;
}
