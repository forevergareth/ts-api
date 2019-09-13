"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Knex = require("knex");
const objection_1 = require("objection");
const KnexConfig = require("../../knexfile");
class Database {
    // [ constructor ]
    constructor() { }
    // Configure database
    configure() {
        const { NODE_ENV } = process.env;
        const isProd = NODE_ENV === "production";
        // Initialize knex.
        // If application is in production mode, use production configurations
        const knex = Knex(isProd ? KnexConfig["production"] : KnexConfig["development"]);
        // Give the knex instance to objection ORM.
        objection_1.Model.knex(knex);
    }
}
exports.default = Database;
