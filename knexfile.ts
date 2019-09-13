// Update with your config settings.

const development =  {
  client: process.env.DATABASE_TYPE || 'pg',
  connection: {
    host : process.env.DATABASE_HOST || 'localhost',
    user : process.env.DATABASE_USERNAME || 'postgres',
    password : process.env.DATABASE_PASSWORD || 'admin',
    database : process.env.DATABASE_NAME || 'sample'
  },
  migrations: {
    tableName: "knex_migrations",
    directory: __dirname + "/develop/database/migrations",
    extension: 'ts',
  },
  seeds: {
    directory: __dirname + "/develop/database/seeds"
  }
}
const production = {
  client: process.env.DATABASE_TYPE || 'pg',
  connection: {
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
  },
  migrations: {
    tableName: "knex_migrations",
    directory: __dirname + "database/migrations",
    extension: 'ts',
  },
  seeds: {
    directory: __dirname + "database/seeds"
  }
}

module.exports = {
  development, production
}
