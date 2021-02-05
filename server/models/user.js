'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Transaction, {
        foreignKey: 'senderID'
      })
      User.hasMany(models.Friend, {
        foreignKey: 'userID'
      })
      // define association here
    }
  };
  User.init({
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    hash: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    funds: DataTypes.DECIMAL(10, 2),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};