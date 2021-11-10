"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class materi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  materi.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaMateri: DataTypes.STRING,
      file: DataTypes.STRING,
      jenisMateri: DataTypes.ENUM(["recording", "materi"]),
    },
    {
      sequelize,
      modelName: "materi",
    }
  );
  return materi;
};
