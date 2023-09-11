
//Importacion de modulos
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const morgan = require('morgan');
const path = require('path');
const {sequelize}= require('./database');
const { NoteModel } = require('./src/models/Notes');
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
app.use(express.static(path.join(__dirname +'/public')))


// Establece el motor de vistas EJS
app.use(express.static(__dirname +'/public'))
app.set('view engine', 'ejs');
app.get('/',async (req, res) => {

  const notas = await NoteModel.findAll()

  res.render('index',{title:"Home",notas: notas.reverse()});
  
});

app.get('/crear',async(req,res)=>{

  res.render('crear');


})

app.use('/notes',require('./src/routes/notes.routes'))

app.listen(port, () => {
  sequelize
  .sync({force:true})
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));
  console.log(`Servidor corriendo en el puerto ${port}`);
});

