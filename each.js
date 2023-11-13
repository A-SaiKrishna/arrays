function each(elements, cb) {
  //checking elements ia array or not
  if (!Array.isArray(elements)) return;

  for (let index = 0; index < elements.length; index++) {
    cb(elements[index], index);
  }
}

module.exports = each;
