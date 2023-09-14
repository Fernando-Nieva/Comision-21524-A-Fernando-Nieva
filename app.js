//Importacion de modulos
require('dotenv').config();

const express = require("express");
const app = express();
const helmet= require('helmet');
const cors = require("cors");

const port = process.env.PORT || 3000;

const morgan = require("morgan");
const path = require("path"); 
const methodOverride = require("method-override");
const { sequelize } = require("./database");
const { PostsModel } = require("./src/models/posts");
const {borrarPost,} = require("./src/controllers/posts.controller");
const bodyParser = require("body-parser");

require("ejs");

//Middlewares
// app.use(helmet.contentSecurityPolicy(false));
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      imgSrc: ['*'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
    },
  })
  );
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

// Establece el motor de vistas EJS
app.set("view engine", "ejs");


// Configura la ubicación de las vistas
app.set("views", __dirname + "/src" + "/views");
app.use(express.static(__dirname + "/views"));
//Archivos estaticos -carpeta publica
app.use(express.static(__dirname + "/public"));
// app.use(express.static("/public"));


app.get("/", async (req, res) => {
  const posteo = await PostsModel.findAll();
  res.render("index", { title: "Foro", posteo: posteo.reverse() });
});

//crear Posts
app.get("/crear", async (req, res) => {
  res.render("crear");
});

app.get("/eliminarpost/:id", async (req, res) => {
  console.log("post borrado");
  borrarPost(req, res);
});

app.get("/editarpost/:id", async (req, res) => {
  const { id } = req.params;
  const post = await PostsModel.findOne({where:{id:id}});
  res.render("editar", { post });
});

//Rutas
app.use("/posts", require("./src/routes/posts.routes"));

//Escucha al Servidor
app.listen(port, () => {
  sequelize
    .sync({ force: false })
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err));
  console.log(`Servidor corriendo en el puerto ${port}`);
});

