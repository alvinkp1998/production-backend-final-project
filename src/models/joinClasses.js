"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JoinClasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ JoinClasses, Sessions, Roles, Classes }) {
      JoinClasses.belongsTo(Classes);
      JoinClasses.belongsTo(Roles);
      JoinClasses.belongsToMany(Sessions, {
        through: "presences",
        as: "absen",
      });
    }
  }
  JoinClasses.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: DataTypes.UUID,
      },
      ClassId: {
        type: DataTypes.INTEGER,
      },
      RoleId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "JoinClasses",
    }
  );
  return JoinClasses;
};
