const Deposito = require('../model/Deposito')

module.exports = {
    async index(req,res){
        const deposito = await Deposito.findAll();  // findAll -> listar todos os dados
        return res.json(deposito)
        // funçao retorna todos os dados
    },

    async findByid(req,res){
        const { id } = req.params;
        const deposito = await Deposito.findAll({
            where: {
                id: id
            }
        }); 
        return res.json(deposito)
        // funçao retorna todos os  dados por id
    },

    async store(req,res){
        const { nome } = req.body;
        const deposito = await Deposito.create({
            nome
        }); 
        return res.json(deposito)
        // função create
    },

    async delete(req,res){
        const { id } = req.params;
        const deposito = await Deposito.destroy({
            where: {
                id: id
            }
        }); 
        return res.json(deposito)
        // funçao delete
    },

    async update(req,res){
        const { id, nome } = req.body;
        const deposito = await Deposito.update({
            nome
        }, {
            where: {
                id: id
            }
        }); 
        return res.json(deposito)
        // função update
    }
}