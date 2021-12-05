"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Classes, Users, Sessions }) {
      Classes.belongsToMany(Users, { through: "JoinClasses" });
      Classes.hasMany(Sessions);
      // Classes.hasMany(JoinClasses);
    }
  }
  Classes.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      kodeKelas: DataTypes.STRING(6),
      namaKelas: DataTypes.STRING,
      tanggalMulai: DataTypes.DATEONLY,
      tanggalSelesai: DataTypes.DATEONLY,
      deskripsiKelas: DataTypes.STRING,
      fotoKelas: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Classes",
    }
  );
  return Classes;
};
