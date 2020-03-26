exports.handler = (functionName) => {
    return async (request, response) => {
        let controller = require(`./controllers/${functionName}`);
        let result = await controller.process(request);

        response.status(200).send(result);
    };
}