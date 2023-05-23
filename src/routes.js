const express = require('express');
const UsuarioController = require('./controller/UsuarioController');
const ProdutoController = require('./controller/ProdutoController');
const FornecedorController = require('./controller/FornecedorController');
const DepositoController = require('./controller/DepositoController');

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('Ola mundo')
})

routes.get('/usuario', UsuarioController.index)
routes.get('/usuario/:id', UsuarioController.findByid)
routes.post('/usuario', UsuarioController.store)
routes.delete('/usuario/:id', UsuarioController.delete)
routes.put('/usuario', UsuarioController.update)

routes.get('/produto', ProdutoController.index)
routes.get('/produto/:id', ProdutoController.findByid)
routes.post('/produto', ProdutoController.store)
routes.delete('/produto/:id', ProdutoController.delete)
routes.put('/produto', ProdutoController.update)

routes.get('/fornecedor', FornecedorController.index)
routes.get('/fornecedor/:id', FornecedorController.findByid)
routes.post('/fornecedor', FornecedorController.store)
routes.delete('/fornecedor/:id', FornecedorController.delete)
routes.put('/fornecedor', FornecedorController.update)

routes.get('/deposito', DepositoController.index)
routes.get('/deposito/:id', DepositoController.findByid)
routes.post('/deposito', DepositoController.store)
routes.delete('/deposito/:id', DepositoController.delete)
routes.put('/deposito', DepositoController.update)

module.exports = routes;