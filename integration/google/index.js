'use strict';
const config = require('./controllers/config');

const {
  handler
} = require('./handlers');

const functions = [
  'register',
  'payment',
  'membership',
  'upsell',
  'change-email',
];

// Auto-Generator
let exportObject = {};

for(let functionName of functions){
  exportObject[`${functionName}-${config.env}`] = handler(functionName)
}

module.exports = exportObject;