# Node.JS REFERENCE

## 'global'
*returns the nodejs global object*
```javascript
console.log(global)

// Output
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 69.4202999919653,
      nodeStart: 0.8951999992132187,
      v8Start: 2.938199996948242,
      bootstrapComplete: 46.68310000002384,
      environment: 21.509199991822243,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1653153282413.306
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
```
## The Node.js 'os' module
>This module provides many functions that you can use to retrieve information from the underlying operating system and the computer the program runs on, and interact with it.
```javascript
// Operating system info
const os = require('os')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

// Output
Windows_NT
Windows 10 Home
C:\Users\wayne
```

## The Node.js '__dirname' enviroment variable
> __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file
  ```javascript
  console.log(__dirname);
  console.log(__filename)

  // Output
  C:\GitHub\nodejs-reference
  C:\GitHub\nodejs-reference\index.js
  ```

## The Node.js 'path' module
> The path module provides a lot of very useful functionality to access and interact with the file system.
```javascript
  const path = require('path') 

  console.log(path.dirname(__filename));
  console.log(path.basename(__filename));
  console.log(path.extname(__filename));
  console.log(path.parse(__filename))

  // Output
path.dirname: C:\GitHub\nodejs-reference
path.basename: index.js
path.extname: .js
path.parse: {
  root: 'C:\\',
  dir: 'C:\\GitHub\\nodejs-reference',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
```
## 