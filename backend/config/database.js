module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuh93un6mpglqcuhe70-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'events_npmk'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'fKWtDJOLV2g4EE6Lcx171oA5Hj5me9YC'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
