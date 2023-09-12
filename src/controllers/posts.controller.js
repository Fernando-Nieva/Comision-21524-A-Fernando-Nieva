
const { PostsModel } = require('../models/posts');

const createPosts = async (req,res)=>{
    const{Titulo,Contenido,Autor,img} = req.body;
    const post={Titulo,Contenido,Autor,img};

    await PostsModel.create(post)
    // res.json(post);
    res.redirect('/');


}

const listPosts = async(req,res)=>{
    const allPosts =await PostsModel.findAll()
    res.json(allPosts)
 // Renderiza la vista 'index' y pasa la variable 'allPosts'
//  res.render('index', { title: 'Título de la página', posteo: allPosts });

}


module.exports={createPosts,listPosts}