module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },


testing: {
  client: "sqlite3",
  connection: {
    filename: "./data/auth.db3",
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
},


}
