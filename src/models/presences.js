"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class presences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  presences.init(
    {
      JoinClassUserId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      sessionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "presences",
    }
  );
  return presences;
};
