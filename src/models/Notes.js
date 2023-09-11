const {sequelize}=require('../../database')
const {DataTypes}=require('sequelize')



const NoteModel =  sequelize.define('notes',{


  
  author: DataTypes.STRING,
  content: DataTypes.TEXT,

//  Titulo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       Contenido: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       }
   
})

module.exports={NoteModel}