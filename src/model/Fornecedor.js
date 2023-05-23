const {Model, DataTypes} = require('sequelize')

class Fornecedor extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'fornecedores',
        })
    }
}

module.exports = Fornecedor;