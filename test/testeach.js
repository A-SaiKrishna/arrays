let each = require("../each.js");
let item = require("../data");
function cb(element, index) {
  console.log(`elements[${index}] = ${element}`);
}
each(item, cb);
