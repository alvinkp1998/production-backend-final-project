"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Materials, Sessions }) {
      Materials.belongsTo(Sessions);
    }
  }
  Materials.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaMateri: DataTypes.STRING,
      file: DataTypes.STRING,
      jenisMateri: DataTypes.ENUM(["recording", "powerpoint"]),
    },
    {
      sequelize,
      modelName: "Materials",
    }
  );
  return Materials;
};
