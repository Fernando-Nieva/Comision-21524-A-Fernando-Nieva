const { sequelize } = require("../../database");
const { DataTypes } = require("sequelize");

const PostsModel = sequelize.define("posts", {

  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },

  Titulo: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  Contenido: {
    type: DataTypes.TEXT,
    validate: { notEmpty: true },
  },
  Autor: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  img: {
    
    type:DataTypes.STRING,
    isUrl:true
  } 

});

module.exports = { PostsModel };
