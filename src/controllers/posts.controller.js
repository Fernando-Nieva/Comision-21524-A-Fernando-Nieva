const { PostsModel } = require("../models/posts");
// const { post } = require("../routes/posts.routes");

const createPosts = async (req, res) => {
  const { Titulo, Contenido, Autor, img } = req.body;
  const post = { Titulo, Contenido, Autor, img };
   // Verificar si alguno de los campos obligatorios está vacío
   if (!Titulo || !Contenido || !Autor) {
    return res.redirect("/crear");
  }else{

  await PostsModel.create(post);
//   res.json(post);
  res.redirect("/");
  }
};



const listPosts = async (req, res) => {
  const allPosts = await PostsModel.findAll();
  res.json(allPosts);
  // Renderiza la vista 'index' y pasa la variable 'allPosts'
  //  res.render('index', { title: 'Título de la página', posteo: allPosts });
};

// Controlador para borrar un post por su ID
const borrarPost = async (req, res) => {

    // const {id}=req.params;
    // await PostsModel.destroy({
    //     where : {id:id}
    // })
    //   try {
        //   const postId = req.params.postId;
        //   const postId = req.params;
        //   Busca el post por su ID
        const postId = req.params;
        const post = await PostsModel.findByPk(postId.id);
        // console.log(postId);
        // res.json({post})
        if (!post) {
            return res.status(404).json({ message: "Post no encontrado" });
        }
        post.destroy(postId);
        res.redirect('/')
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error interno del servidor" });
//   }

};


// const acturalizarPost = async (req, res) => {
//   const id = req.params.id; // Cambio "postId" para obtener el ID del parámetro
//   // const post = { title, content, author, img };
 
//   const post= await post.update(req.body, { where: { id: id } });
//   res.json(post);

// };

  


module.exports = { createPosts, listPosts, borrarPost };
