'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      senderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      recipientID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        }
      },
      type: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: true
        }
      },
      month: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};