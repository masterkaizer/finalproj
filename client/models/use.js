//// This is a table of recommendations
module.exports = function(sequelize, DataTypes) {
    var Meetup = sequelize.define('Meetup', {
      email: DataTypes.STRING,
      recommendation: DataTypes.STRING,
      category: DataTypes.STRING,
    });
    return Meetup;
  };