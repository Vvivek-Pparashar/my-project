const fs = require("fs");
const { readFile, writeFile } = require("fs");

readFile("./Content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Got an error ", err.code);
    return;
  }

  writeFile("./Content/second.txt", result, (err, result) => {
    if (err) {
      console.log("2");
      console.log(err);
      
      return;
    }

    console.log("3");

    console.log(result);
  });
});

// const key = "vivek parashar is gr8";
// console.log(key);

// writeFile('./Content/second.txt', key)
