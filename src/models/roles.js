"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Roles, JoinClasses }) {
      Roles.hasMany(JoinClasses);
    }
  }
  Roles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      namaRole: DataTypes.ENUM(["Tutor", "Fasilitator", "Student"]),
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
