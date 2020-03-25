'use strict';

const {
  handler
} = require('./handlers');

const functions = [
  'process'
];

// Auto-Generator
let exportObject = {};

for(let functionName of functions){
  exportObject[`${functionName}`] = handler(functionName)
}

module.exports = exportObject;