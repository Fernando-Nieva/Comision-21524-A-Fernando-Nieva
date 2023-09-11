//Instancia conexion ala base de datos
const { Sequelize,DataTypes} = require('sequelize')


const sequelize = new Sequelize('epicadb','root','',{
        host:'localhost',
        dialect:'mysql'

});


const conectarDb = async()=>{
        try{
                await sequelize.authenticate();
                console.log('Conexion a DB exitosa');
        }catch(error){
                console.error('Error',error);
        }
}

module.exports = {
        conectarDb,
        sequelize,
        Sequelize,
        DataTypes
}