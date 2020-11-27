"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class writing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  writing.init(
    {
      type: DataTypes.STRING,
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      imageUrl: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
      userId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "writing",
    }
  );
  return writing;
};
