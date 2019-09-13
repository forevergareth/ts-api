import { configure, getLogger } from "log4js";
import { Service } from "typedi";

// @Service()
export default class Logger {

    private _logger: any = null;

    public get logger() {
        return this._logger;
    }

    constructor(useFileLogger, useConsoleLogger) {
        if (useFileLogger) {
           this._logger = this.configureFileLogger
        }
        // if (useConsoleLogger) {
        //    this._logger = this.configureConsoleLogger
        // }
    }

    private configureFileLogger() {
        configure({
            appenders: { 
                app: { 
                    type: 'file', 
                    filename: '../../logs/app.log'
                } 
            },
            categories: { 
                default: { 
                    appenders: ['app'], 
                    level: 'error' 
                } 
            }
        });

        const logger = getLogger();
        logger.level = process.env.APP_LOG_LEVEL || 'debug';

        return logger;
    }

    private configureConsoleLogger() {

    }
}