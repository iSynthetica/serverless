exports.handler = async event => {
    let payloads = event.body || {};
    let controller = require(`/opt/nodejs/select_plan`);
    let result = await controller.process(payloads);

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    };
};