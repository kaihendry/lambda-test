const log = require("lambda-log");

const addLogger = (handler) => {
  const wrappedHandler = async (...args) => {
    const mylog = log;
    mylog.options.meta.ip = args[0].requestContext.identity.sourceIp;
    return await handler(mylog)(...args);
  };
  return wrappedHandler;
};

module.exports = addLogger;
