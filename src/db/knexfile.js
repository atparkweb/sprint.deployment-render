module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.POSTGRES_USER || "postgres",
      database: process.env.POSTGRES_DB || "ccpixels",
      password: "postgres",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
