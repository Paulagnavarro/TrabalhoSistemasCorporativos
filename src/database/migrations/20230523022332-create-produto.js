'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('produto', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tipo_produto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho:{
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      preco:{
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
