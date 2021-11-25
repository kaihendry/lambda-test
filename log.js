const log = require('lambda-log');
const TZ = require('xtz');

const addLogger = (handler) => {
    const wrappedHandler = async (...args) => {
        const mylog = log;
        mylog.options.meta.ip = args[0].requestContext.identity.sourceIp;

        mylog.options.dynamicMeta = function (message) {
            return {
                timestamp: TZ.toTimeZone(
                    new Date(),
                    'Asia/Singapore',
                ).toISOString(),
            };
        };

        return await handler(mylog)(...args);
    };
    return wrappedHandler;
};

module.exports = addLogger;
