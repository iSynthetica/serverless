'use strict';
const config = require('/opt/nodejs/config');

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

module.exports.plans = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};

module.exports.register = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};

module.exports.payment = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};

module.exports.upgrade = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};

module.exports.donate = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};

module.exports.membership = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};

module.exports.updateEmail = async event => {
    let result = {
        "message": "Hello from AWS M1 API",
        "request": event
    }

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};
