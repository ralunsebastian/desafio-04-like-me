
const pool = require('./data/db.js'); 

const obtenerPosts = async () => {
  try {
    const query = 'SELECT * FROM posts ORDER BY id DESC';
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error al obtener posts:', error);
    throw error;
  }
};

const insertarPost = async ({ titulo, img, descripcion, likes }) => {
  try {
    const query = `
      INSERT INTO posts (titulo, img, descripcion, likes)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error al insertar post:', error);
    throw error;
  }
};

const darLike = async (id) => {
  try {
    const query = `
      UPDATE posts SET likes = likes + 1
      WHERE id = $1
      RETURNING *
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error al dar like:', error);
    throw error;
  }
};

const eliminarPost = async (id) => {
  try {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  } catch (error) {
    console.error('Error al eliminar post:', error);
    throw error;
  }
};


module.exports = {
  obtenerPosts,
  insertarPost,
  darLike,
  eliminarPost,
};
