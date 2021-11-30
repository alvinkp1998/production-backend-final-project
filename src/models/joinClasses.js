"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JoinClasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ JoinClasses, Sessions, Roles, Classes, Users }) {
      // JoinClasses.belongsToMany(Sessions, { through: "presensi" });
      // JoinClasses.belongsTo(Roles);
      JoinClasses.belongsTo(Classes);
      JoinClasses.belongsTo(Roles);
      JoinClasses.belongsToMany(Sessions, { through: "presences" });
    }
  }
  JoinClasses.init(
    {
      UserId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      ClassId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      RoleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "JoinClasses",
    }
  );
  return JoinClasses;
};
