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
    }
  }
  Events.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    starDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    state: DataTypes.BOOLEAN,
    maxCapacity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'events', // Consistente con categories.js
  });
  return Events;
};