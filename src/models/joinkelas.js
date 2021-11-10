"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinKelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  joinKelas.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "joinKelas",
    }
  );
  return joinKelas;
};
