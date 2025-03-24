module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection:
      env("DATABASE_CLIENT") === "postgres"
        ? {
            connectionString: env("DATABASE_URL"),
            host: env("DATABASE_HOST"),
            port: env.int("DATABASE_PORT"),
            database: env("DATABASE_NAME"),
            user: env("DATABASE_USERNAME"),
            password: env("DATABASE_PASSWORD"),
            ssl: env.bool("DATABASE_SSL", false) && {
              rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
            },
          }
        : {
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
    useNullAsDefault: true,
  },
});
