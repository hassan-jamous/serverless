'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'second Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

};
