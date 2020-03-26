exports.handler = async event => {
    let payloads = event.body || {};
    let controller = require(`/opt/nodejs/pay`);
    let result = await controller.process(payloads);

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};