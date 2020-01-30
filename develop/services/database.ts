import * as Knex from "knex";
import { Model } from "objection";
const KnexConfig = require("../../knexfile");

class Database {
  // --------------------------------------------------------------------------
  // [Private] Fields
  // --------------------------------------------------------------------------


  // --------------------------------------------------------------------------
  // [Public] Constructor
  // --------------------------------------------------------------------------

  constructor() {
    this.configure()
  }

  // --------------------------------------------------------------------------
  // [Public] Accessors
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // [Public] Methods
  // --------------------------------------------------------------------------

  // Configure database with knex driver
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

  // --------------------------------------------------------------------------
  // [Private] Methods
  // --------------------------------------------------------------------------
}

const service  = new Database();

// ----------------------------------------------------------------------------
// Module Exports
// ----------------------------------------------------------------------------

export {
  service as default,
  service as Database
}

