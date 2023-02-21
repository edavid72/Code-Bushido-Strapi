module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cehsh7kgqg4e0ef449qg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'codebushido_khpn'),
      user: env('DATABASE_USERNAME', 'dcervellon'),
      password: env('DATABASE_PASSWORD', 'pdvn3PxNjx6AcxusjFnqKVPx9cTR1ZKM'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
