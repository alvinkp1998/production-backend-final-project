"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ kelas, users, sesi, joinKelas }) {
      // kelas.belongsToMany(users, { through: "joinKelas" });
      kelas.hasMany(sesi);
      kelas.hasMany(joinKelas, { foreignKey: "kelasId" });
    }
  }
  kelas.init(
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
      modelName: "kelas",
    }
  );
  return kelas;
};
