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
      writing.belongsTo(models.user);
      writing.belongsTo(models.category);
    }
  }
  writing.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.STRING, allowNull: false },
      imageUrl: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
      userId: { type: DataTypes.STRING, allowNull: false },
      categoryId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "writing",
    }
  );
  return writing;
};
