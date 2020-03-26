'use strict';

const {
  handler
} = require('./handlers');

const functions = [
  'register',
  'payment',
  'membership',
  'upsell',
  'changeEmail',
];

// Auto-Generator
let exportObject = {};

for(let functionName of functions){
  exportObject[`${functionName}`] = handler(functionName)
}

module.exports = exportObject;