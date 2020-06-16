//// This is a table of recommendations
module.exports = function(sequelize, DataTypes) {
    var Recommend = sequelize.define('Recommend', {
      email: DataTypes.STRING,
      recommendation: DataTypes.STRING,
      category: DataTypes.STRING,
    });
    return Recommend;
  };