import * as Knex from "knex";
import { Model } from "objection";
const KnexConfig = require("../../knexfile");

export default class Database {
  // [ constructor ]
  constructor() {}

  // Configure database
  public configure() {
    const { NODE_ENV } = process.env;
    const isProd = NODE_ENV === "production";

    // Initialize knex.
    // If application is in production mode, use production configurations
    const knex = Knex(
      isProd ? KnexConfig["production"] : KnexConfig["development"]
    );

    // Give the knex instance to objection ORM.
    Model.knex(knex);
  }
}
