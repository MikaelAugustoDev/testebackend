const Sequelize = require('sequelize');

// CONFIGURAÇÃO DA CONEXAO ENTRE MYSQL E NODEJS
const sequelize = new Sequelize('formulario', 'root', 'mikael777', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}