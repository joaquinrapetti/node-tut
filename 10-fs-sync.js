// FS - module File System
// const fs = require("fs").readFileSync()
const { readFileSync, writeFileSync } = require("fs");

// path + encode format
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// path and name + result
// flag: 'a' - append to the exist file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
