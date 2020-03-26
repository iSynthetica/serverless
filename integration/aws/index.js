'use strict';
const config = require('./opt/nodejs/config');

const functions = config.functions;

let exportObject = {};

for(let functionName of functions){
    exportObject[`${functionName}-${config.env}`] = handler(functionName)
}

module.exports = exportObject;

function handler(functionName) {
    return async event => {
        let result = {
            "message": "Hello from " + functionName,
            "request": event
        }

        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    };
}

// module.exports.process = async event => {
//     let result = {
//         "message": "Hello from AWS M1 API",
//         "request": event
//     }
//
//     return {
//         statusCode: 200,
//         body: JSON.stringify(result)
//     };
// };
