'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Friend.belongsTo(models.User, {
        foreignKey: 'userID'
      })
      Friend.belongsTo(models.User, {
        foreignKey: 'friendID'
      })
      // define association here
    }
  };
  Friend.init({
    userID: DataTypes.INTEGER,
    friendID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};