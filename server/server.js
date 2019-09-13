"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const log4js_1 = require("log4js");
const database_1 = require("./services/database");
const logger_1 = require("./services/logger");
new database_1.default().configure();
const logger = new logger_1.default().init();
// its important to set container before any operation you do with routing-controllers,
routing_controllers_1.useContainer(typedi_1.Container);
// creates express app, registers all controller routes and returns you express app instance
const server = routing_controllers_1.createExpressServer({
    // cors: {
    //     // options from cors documentation
    // },
    routePrefix: "/api",
    controllers: [__dirname + "/controllers/v1/*.ts"]
});
server.use(log4js_1.connectLogger(logger, { level: process.env.LOG_LEVEL || "info" }));
const port = process.env.PORT || 8000;
server.listen(port, function () {
    console.log(`API listening on http://localhost:${port}`);
    logger.info(`API listening on http://localhost:${port}/appmetrics-dash`);
    logger.info(`OpenAPI (Swagger) spec is available at http://localhost:${port}/swagger/api`);
    // logger.info(`Swagger UI is available at http://localhost:${port}/explorer`);
});
