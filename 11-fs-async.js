// FS - module File System async
// const fs = require("fs").readFileSync()
const { readFile, writeFile } = require("fs");

// need to provide a callback
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    console.log(err);
    return;
  });
  const second = result;
  writeFile(
    "./content/result-async.txt",
    `Here is the result: ${first}, ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("done with this task");
    }
  );
});
console.log("starting next task");
