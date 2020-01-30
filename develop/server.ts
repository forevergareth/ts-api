import "reflect-metadata"; // this shim is required
import { createExpressServer, useContainer } from "routing-controllers";
import { Container } from "typedi";
import { connectLogger } from "log4js";
import * as morgan from 'morgan';

import Database from "./services/database";
import AppLogger from "./services/logger";


const logger = AppLogger.getAppLogger;

// its important to set container before any operation you do with routing-controllers,
useContainer(Container);

// creates express app, registers all controller routes and returns you express app instance
const server = createExpressServer({
  // cors: {
  //     // options from cors documentation
  // },
  routePrefix: "/api",
  controllers: [__dirname + "/controllers/v1/*.ts"]
});

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
server.use(connectLogger(logger, { level: process.env.LOG_LEVEL || "info" }));

const port = process.env.PORT || 8000;

server.listen(port, function() {
  console.log(`API listening on http://localhost:${port}`);
  logger.info(`API listening on http://localhost:${port}/appmetrics-dash`);
  logger.info(
    `OpenAPI (Swagger) spec is available at http://localhost:${port}/swagger/api`
  );
  // logger.info(`Swagger UI is available at http://localhost:${port}/explorer`);
});
