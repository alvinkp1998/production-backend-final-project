"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ kota, kecamatan, provinsi }) {
      kota.hasMany(kecamatan);
      kota.belongsTo(provinsi);
    }
  }
  kota.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaKota: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kota",
    }
  );
  return kota;
};
