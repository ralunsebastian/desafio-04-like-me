const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '12345',
  database: 'likeme',
  port: 5433,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error("Error al conectar con PostgreSQL:", err);
  } else {
    console.log("Conexión exitosa:", res.rows);
  }
  pool.end();
});
