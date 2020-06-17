// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host : 'localhost',
      port : '3307',
      user : 'root',
      password : 'root',
      database : 'comentarios'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
