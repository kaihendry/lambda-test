const llog = require("lambda-log");

const addLogger = (handler) => {
  const wrappedHandler = async (...args) => {
    const log = llog;
    if (args.length > 0) {
            log.options.meta.ip = args[0].requestContext.identity.sourceIp;
        }
        return await handler(log)(...args);
  };
  return wrappedHandler;
};

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

exports.lambdaHandler = addLogger((log) => async (event, context) => {
  //console.log(`event: ${JSON.stringify(event, null, 2)}`);
  //console.log(`context: ${JSON.stringify(context, null, 2)}`);
  //console.log(`metrics: ${JSON.stringify(metrics, null, 2)}`);

  log.info("hello world");
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world",
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
});
