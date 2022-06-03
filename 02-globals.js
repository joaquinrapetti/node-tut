// GLOBALS - NO WINDOW - NO BROWSER!!!

// __dirname    - path to current directory
// __filename   - file name
// require      -function to use modules (CommonJS)
// module       -info about current module (file)
// process      -info about env where the program is beig executed

console.log("dirname:", __dirname);
console.log("filename", __filename);

setInterval(() => {
  console.log("hello world");
}, 2000);
