const fs = require("fs");

setTimeout(() => {
  console.log("vivekParashar");
}, 0);

setImmediate(() => console.log("immediate 1 is completed"));

fs.readFile("./test-file.txt", () => {
  console.log("i/o is completed");
});

console.log("top level test file is completed");
