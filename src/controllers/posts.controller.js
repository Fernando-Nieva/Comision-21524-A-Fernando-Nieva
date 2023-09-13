const { where } = require("sequelize");
const { PostsModel } = require("../models/posts");
// const { post } = require("../routes/posts.routes");

const createPosts = async (req, res) => {
  const { Titulo, Contenido, Autor, img } = req.body;
  const post = { Titulo, Contenido, Autor, img };

  // Verificar si alguno de los campos obligatorios está vacío
  if (!Titulo || !Contenido || !Autor) {
    return res.redirect("/crear");
  } else {
    await PostsModel.create(post);
    //   res.json(post);
    res.redirect("/");
  }
};

const listarPosts = async (req, res) => {
  const allPosts = await PostsModel.findAll();
  res.json(allPosts);
};

const borrarPost = async (req, res) => {
  const postId = req.params;
  const post = await PostsModel.findByPk(postId.id);
  // res.json({post})
  if (!post) {
    return res.status(404).json({ message: "Post no encontrado" });
  }
  post.destroy(postId);
  res.redirect("/");
};

const acturalizarPost = async (req, res) => {
  const { id } = req.params; // Obtén el ID del parámetro
  const { Titulo, Autor, Contenido, img } = req.body; // Extrae el campo "Titulo" del cuerpo de la solicitud
  const post = { Titulo, Autor, Contenido, img };

  try {
    // Actualiza el post en la base de datos
    const updatedPost = await PostsModel.update(post, { where: { id: id } });

    // Verifica si se actualizó alguna fila (es decir, si el post existía)
    if (!updatedPost) {
      return res.status(404).json({ message: "Post no encontrado :-(" });
    }

    // Envía el post actualizado como respuesta
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = { createPosts, listarPosts, borrarPost, acturalizarPost };
