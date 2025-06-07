
const pool = require('./data/db.js'); 

const obtenerPosts = async () => {
  const query = 'SELECT * FROM posts ORDER BY id DESC';
  const result = await pool.query(query);
  return result.rows;
};

const insertarPost = async ({ titulo, img, descripcion, likes }) => {
  const query = `
    INSERT INTO posts (titulo, img, descripcion, likes)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const darLike = async (id) => {
  const query = `
    UPDATE posts SET likes = likes + 1
    WHERE id = $1
    RETURNING *
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const eliminarPost = async (id) => {
  const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  obtenerPosts,
  insertarPost,
  darLike,
  eliminarPost,
};
