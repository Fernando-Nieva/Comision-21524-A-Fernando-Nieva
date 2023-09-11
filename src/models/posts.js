const {sequelize}=require('../../database')
const {DataTypes}=require('sequelize')

const postsModel = sequelize.define('notes', {

 Titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
      }

});

module.exports = {postsModel}
