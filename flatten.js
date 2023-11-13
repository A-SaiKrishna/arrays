let flattenArray = [];
function flatten(elements) {
  if (!Array.isArray(elements)) {
    return;
  }
  for (let index = 0; index < elements.length; index++) {
    if (Array.isArray(elements[index])) {
      flatten(elements[index]);
    } else {
      flattenArray.push(elements[index]);
    }
  }
  return flattenArray;
}

module.exports = flatten;
