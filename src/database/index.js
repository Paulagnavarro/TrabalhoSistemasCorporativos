const Sequelize = require('sequelize')
const dbConfig = require('../config/database');
const Produto = require('../model/Produto');
const Usuario = require('../model/Usuario');
const Fornecedor = require('../model/Fornecedor');
const Deposito = require('../model/Deposito');

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Produto.init(connection)
Fornecedor.init(connection)
Deposito.init(connection)

module.exports = connection;