"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ kecamatan, alamat, kota }) {
      kecamatan.hasMany(alamat);
      kecamatan.belongsTo(kota);
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
