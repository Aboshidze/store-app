const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Order", {
    total: DataTypes.FLOAT,
  });
};
