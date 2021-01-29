'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: 'senderID',
				onDelete: "CASCADE",
      })
      // define association here
    }
  };
  Transaction.init({
    senderID: DataTypes.INTEGER,
    recipientID: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    month: DataTypes.STRING,
    year: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};