const Fornecedor = require('../model/Fornecedor')

module.exports = {
    async index(req,res){
        const fornecedor = await Fornecedor.findAll();  // findAll -> listar todos os dados
        return res.json(fornecedor)
        // funçao retorna todos os dados
    },

    async findByid(req,res){
        const { id } = req.params;
        const fornecedor = await Fornecedor.findAll({
            where: {
                id: id
            }
        }); 
        return res.json(fornecedor)
        // funçao retorna todos os  dados por id
    },

    async store(req,res){
        const { nome } = req.body;
        const fornecedor = await Fornecedor.create({
            nome
        }); 
        return res.json(fornecedor)
        // função create
    },

    async delete(req,res){
        const { id } = req.params;
        const fornecedor = await Fornecedor.destroy({
            where: {
                id: id
            }
        }); 
        return res.json(fornecedor)
        // funçao delete
    },

    async update(req,res){
        const { id, nome } = req.body;
        const fornecedor = await Fornecedor.update({
            nome
        }, {
            where: {
                id: id
            }
        }); 
        return res.json(fornecedor)
        // função update
    }
}