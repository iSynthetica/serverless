'use strict';
const config = require('./controllers/config');

const functions = config.functions;

// Auto-Generator
let exportObject = {};

for(let functionName of functions){
  exportObject[`${functionName}-${config.env}`] = handler(functionName)
}

module.exports = exportObject;

function handler(functionName) {
  return async (request, response) => {
    let payloads = request.body || {};

    let controller = require(`./controllers/${functionName}`);
    let result = await controller.process(payloads);

    response.status(200).send(result);
  };
}