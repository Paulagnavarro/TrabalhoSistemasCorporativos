const {Model, DataTypes} = require('sequelize')

class Produto extends Model {
    static init(sequelize){
        super.init({
            tipo_produto: DataTypes.STRING,
            cor: DataTypes.STRING,
            tamanho: DataTypes.STRING,
            quantidade: DataTypes.INTEGER,
            preco: DataTypes.DECIMAL
        }, {
            sequelize,
            underscored: true
        })
    }
}

module.exports = Produto;