'use strict';

module.exports.process = async event => {
    console.log(event);
    let step = event.pathParameters.step;
    let payload = JSON.parse(event.body);
    console.log(event);

    const controller = require(`/opt/nodejs/${step}`);
    let result = await controller.process(payload);

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
