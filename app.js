
//Importacion de modulos
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const morgan = require('morgan');
const path = require('path');
const {sequelize}= require('./database');
const { PostsModel } = require('./src/models/posts');
const { borrarPost, acturalizarPost } = require('./src/controllers/posts.controller');
require('ejs');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors()); 
app.use(morgan('dev'));

// //rutas
// app.use(require('./src/routes/notes.routes'))

// Configura la ubicación de las vistas
app.set('views', __dirname + '/src'+'/views');
//Archivos estaticos -carpeta publica
app.use(express.static('/public'))

// Establece el motor de vistas EJS
app.use(express.static(__dirname +'/public'))
app.set('view engine', 'ejs');


app.get('/',async (req, res) => {
  const posteo = await PostsModel.findAll()
  res.render('index',{title:"Foro",posteo: posteo.reverse()});
});
//crear Posts
app.get('/crear',async(req,res)=>{
  res.render('crear');
});
app.get('/elmiminarpost/:id',async(req,res)=>{
  console.log("post borrado");
  borrarPost(req,res)
});
// app.get('/editarpost/:id',async(req,res)=>{
//   // const {id}=req.params;
//   // const post =await PostsModel.findOne({ where: { id: id } });
//   // res.render('./editarPost',{post})
//   // acturalizarPost(req,res)

// });

app.use('/posts',require('./src/routes/posts.routes'))

app.listen(port, () => {
  sequelize
  .sync({force:false})
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));
  console.log(`Servidor corriendo en el puerto ${port}`);
});

