'use strict';

module.exports.process = async function(context, req) {

  let result = {
    "message": "Hello from Easyfunnel API",
    "request": context
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: JSON.stringify(result)
  };

  // if (req.query.name || (req.body && req.body.name)) {
  //   context.res = {
  //     // status: 200, /* Defaults to 200 */
  //     body: 'Hello ' + (req.query.name || req.body.name),
  //   };
  // } else {
  //   context.res = {
  //     status: 400,
  //     body: 'Please pass a name on the query string or in the request body',
  //   };
  // }
};