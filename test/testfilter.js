let filter = require("../filter.js");
let item = require("../data.js");
const evenArray = filter(item, (num) => num % 2 === 0);
console.log(evenArray);
