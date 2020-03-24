'use strict';

exports.process = (request, response) => {
  console.log(request);
  response.status(200).send('Hello World!');
};
