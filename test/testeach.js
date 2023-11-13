let each = require("../each.js");
let item = require("../data.js");
function cb(element, index) {
  console.log(`elements[${index}] = ${element}`);
}
each(item, cb);
