// const { where } = require("sequelize");
const { PostsModel } = require("../models/posts");

const createPosts = async (req, res) => {
  try {
    const { Titulo, Contenido, Autor, img } = req.body;
    const post = { Titulo, Contenido, Autor, img };
    await PostsModel.create(post);
    // Redireccionar al usuario a la página de inicio después de crear el post
    res.redirect("/");
  } catch (error) {
    console.error("Error al crear la publicación");
    //Errores
    // return res.status(500).json({
    //   msg: "Error al crear la publicación"
    // })
    res.redirect("/crear");
  }
};

const listarPosts = async (req, res) => {
  try {
    const allPosts = await PostsModel.findAll();
    res.json(allPosts);

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Error al traer la lista de posts",
    });
  }
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

const borrarPost = async (req, res) => {

  const postId = req.params;
  const post = await PostsModel.findByPk(postId.id);
  try{
    post.destroy(postId);
    res.redirect("/");

  } catch (error) {
    console.log(error);
    return res.status(500).json({
        msg: "Error al eliminar el posts"
    })
}
};


module.exports = { createPosts, listarPosts, borrarPost, acturalizarPost };
