import { configure, getLogger, Logger } from "log4js";
import { Service } from "typedi";

// @Service()
class AppLogger {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------

  private _logger: Logger = null;

  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor(useFileLogger, useConsoleLogger) {
    if (useFileLogger) {
      this._logger = this.configureFileLogger();
    }
    if (useConsoleLogger) {
      // this._logger = this.configureConsoleLogger
    }
  }

  
  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  public get getAppLogger() {
    return this._logger;
  }

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Event Handlers
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------
  private configureFileLogger(): Logger {
    // Initialize the log4js instance
    let logger: Logger = null;

    // Initialize the log4js instance
    configure({
      appenders: {
        app: {
          type: "file",
          filename: "../../logs/app.log"
        }
      },
      categories: {
        default: {
          appenders: ["Application"],
          level: "error"
        }
      }
    });

    // Initialize the log4js instance
    logger = getLogger();
    logger.level = process.env.APP_LOG_LEVEL || "debug";

    return logger;
  }

  private configureConsoleLogger() {}
}

const service  = new AppLogger(true, true);


// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

export {
  service as default,
  service as AppLogger
}
