"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
class Logger {
    init() {
        log4js_1.configure({
            appenders: {
                app: {
                    type: 'file',
                    filename: __dirname + '/logs/app.log'
                }
            },
            categories: {
                default: {
                    appenders: ['app'],
                    level: 'error'
                }
            }
        });
        const logger = log4js_1.getLogger();
        logger.level = process.env.APP_LOG_LEVEL || 'debug';
        return logger;
    }
}
exports.default = Logger;
