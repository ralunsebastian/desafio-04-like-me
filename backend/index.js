const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
const { obtenerPosts, insertarPost, darLike, eliminarPost } = require('./consultas');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Montas las rutas
app.use('/api', routes);

app.get('/posts', async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener posts' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const post = await insertarPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error al insertar post' });
  }
});

app.put('/posts/like/:id', async (req, res) => {
  try {
    const post = await darLike(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error al dar like' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const post = await eliminarPost(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.json({ message: 'Post eliminado', post });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar post' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
