
exports.handler = (ip) => {
    return async (request, response) => {
        console.log(request);
        response.status(200).send('Hello World!');
    };
}