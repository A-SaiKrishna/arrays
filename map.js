function map(elements, cb) {
  //checking elements is Array or not
  if (!Array.isArray(elements)) {
    return;
  }
  const newArray = [];
  for (let index = 0; index < elements.length; index++) {
    newArray.push(cb(elements[index], index));
  }
  return newArray;
}

module.exports = map;
