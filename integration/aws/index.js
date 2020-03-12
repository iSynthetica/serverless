'use strict';

module.exports.process = async event => {
    console.log('test=======================================');
    let step = event.pathParameters.step;
    let payload = JSON.parse(event.body);
    console.log('test=======================================');

    const controller = require(`/opt/nodejs/${step}`);
    console.log('test=======================================');
    let result = await controller.process(payload);
    console.log('test=======================================');

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                step: step,
                payload: payload,
                result: result,
                input: event
            }, null, 2
        )
    };
};
