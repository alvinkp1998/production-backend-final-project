"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinKelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ joinKelas, sesi, role }) {
      joinKelas.belongsToMany(sesi, { through: "presensi" });
      joinKelas.hasMany(role);
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
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      kelaId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "joinKelas",
    }
  );
  return joinKelas;
};
