const Produto = require('../model/Produto')

module.exports = {
    async index(req,res){
        const produto = await Produto.findAll();  // findAll -> listar todos os dados
        return res.json(produto)
        // funçao retorna todos os dados
    },

    async findByid(req,res){
        const { id } = req.params;
        const produto = await Produto.findAll({
            where: {
                id: id
            }
        }); 
        return res.json(produto)
        // funçao retorna todos os  dados por id
    },

    async store(req,res){
        const { tipo_produto, cor, tamanho, quantidade, preco} = req.body;
        const produto = await Produto.create({
            tipo_produto, cor, tamanho, quantidade, preco
        }); 
        return res.json(produto)
        // função create
    },

    async delete(req,res){
        const { id } = req.params;
        const produto = await Produto.destroy({
            where: {
                id: id
            }
        }); 
        return res.json(produto)
        // funçao delete
    },

    async update(req,res){
        const { id, tipo_produto, cor, tamanho, quantidade, preco } = req.body;
        const produto = await Produto.update({
            tipo_produto, cor, tamanho, quantidade, preco
        }, {
            where: {
                id: id
            }
        }); 
        return res.json(produto)
        // função update
    }
}