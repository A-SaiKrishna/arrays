let reduce = require("../reduce.js");
let item = require("../data.js");
const sum = reduce(item, (accu, pass) => {
  return (accu = accu + pass);
});
console.log(sum);
