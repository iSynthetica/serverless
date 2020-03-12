'use strict';

exports.process = (request, response) => {
  response.status(200).send('Hello World!');
};
