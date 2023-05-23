const Usuario = require('../model/Usuario')

module.exports = {
    async index(req,res){
        const usuario = await Usuario.findAll();  // findAll -> listar todos os dados
        return res.json(usuario)
        // funçao retorna todos os dados
    },

    async findByid(req,res){
        const { id } = req.params;
        const usuario = await Usuario.findAll({
            where: {
                id: id
            }
        }); 
        return res.json(usuario)
        // funçao retorna todos os  dados por id
    },

    async store(req,res){
        const { nome, email, senha } = req.body;
        const usuario = await Usuario.create({
            nome, email, senha
        }); 
        return res.json(usuario)
        // função create
    },

    async delete(req,res){
        const { id } = req.params;
        const usuario = await Usuario.destroy({
            where: {
                id: id
            }
        }); 
        return res.json(usuario)
        // funçao delete
    },

    async update(req,res){
        const { id, nome, email, senha } = req.body;
        const usuario = await Usuario.update({
            nome, email, senha
        }, {
            where: {
                id: id
            }
        }); 
        return res.json(usuario)
        // função update
    }
}