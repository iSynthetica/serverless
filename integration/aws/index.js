'use strict';

module.exports.process = async event => {
  let step = event.pathParameters;
  let payload = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        step: step,
        payload: payload,
        input: event
      },
      null,
      2
    ),
  };
};
