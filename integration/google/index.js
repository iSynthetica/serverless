'use strict';

exports.process = (request, response) => {

  let result = {
    "message": "Hello from Easyfunnel API",
    "request": request
  }

  response.status(200).send(JSON.stringify(result));
};
