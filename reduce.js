function reduce(elements, cb, startingValue) {
  if (!Array.isArray(elements)) return;
  let ans = 0;
  let index = 0;
  if (startingValue !== undefined) {
    ans = startingValue;
  } else {
    index = 1;
    ans = elements[0];
  }
  while (index < elements.length) {
    ans = cb(ans, elements[index]);
    index++;
  }
  return ans;
}
module.exports = reduce;
