// Get's the NodeJS global object //
//console.log(global);

// Operating system info //
// const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// File system evironment variables  //
console.log(__dirname);
console.log(__filename);

// Node.js path {filesystem} module //
const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
