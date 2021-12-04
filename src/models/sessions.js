"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sessions, JoinClasses, Classes, Materials }) {
      // Sessions.belongsToMany(JoinClasses, { through: "presensi" });
      Sessions.belongsTo(Classes);
      Sessions.hasMany(Materials);
      Sessions.belongsToMany(JoinClasses, {
        through: "presences",
        as: "absensi",
      });
    }
  }
  Sessions.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ClassId: DataTypes.INTEGER,
      namaSesi: DataTypes.STRING,
      kodeSesi: DataTypes.STRING(6),
      waktuMulai: DataTypes.DATEONLY,
      waktuSelesai: DataTypes.DATEONLY,
      urutanSesi: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sessions",
    }
  );
  return Sessions;
};
