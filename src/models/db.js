const Sequelize = require("sequelize");
const sequelize = new Sequelize("cadastro", "root", "1234",{
    host: "localhost",
    dialect: "mysql"}
    );
    sequelize.authenticate().then(function(){
        console.log("conexão realizada com sucesso");
    }).catch(function(){
        console.log("erro na conexão");
    });

    module.exports = sequelize;