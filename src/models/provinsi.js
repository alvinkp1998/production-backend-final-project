"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class provinsi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ provinsi, kota }) {
      provinsi.hasMany(kota);
    }
  }
  provinsi.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaProvinsi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "provinsi",
    }
  );
  return provinsi;
};
