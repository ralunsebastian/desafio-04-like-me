const express = require("express");
const {
  obtenerPosts,
  insertarPost,  
  darLike,
  eliminarPost,
} = require("../consultas.js");

const router = express.Router();

// Obtener todos los posts
router.get("/posts", obtenerPosts);

// Crear un nuevo post
router.post("/posts", insertarPost);

// Dar like a un post
router.put("/posts/like/:id", darLike);

// Eliminar un post
router.delete("/posts/:id", eliminarPost);

module.exports = router;
