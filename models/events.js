'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo(models.Categories, {
        foreignKey: "categoryId",
        as: "category"
      })
      Events.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user"
      })
    }
  }
  Events.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    state: DataTypes.BOOLEAN,
    maxCapacity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Events',
    tableName: 'events', // Consistente con categories.js
  });
  return Events;
};