// Get's the NodeJS global object //
console.log(global);

// Operating system info //
const os = require("os");

console.log("type:", os.type());
console.log("version:", os.version());
console.log("homedir:", os.homedir());

// File system evironment variables  //
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);

// Node.js path {filesystem} module //
const path = require("path");

console.log("path.dirname:", path.dirname(__filename));
console.log("path.basename:", path.basename(__filename));
console.log("path.extname:", path.extname(__filename));
console.log("path.parse:", path.parse(__filename));
