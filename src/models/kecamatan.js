"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kecamatan.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaKecamatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kecamatan",
    }
  );
  return kecamatan;
};
