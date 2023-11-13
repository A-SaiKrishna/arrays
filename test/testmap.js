let map = require("../map.js");
let item = require("../data.js");

let newArray = map(item, (element, index) => {
  return element * 2;
});
console.log(newArray);
