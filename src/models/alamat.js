"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class alamat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ alamat, users }) {
      alamat.hasOne(users);
    }
  }
  alamat.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaAlamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "alamat",
    }
  );
  return alamat;
};
