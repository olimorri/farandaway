module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('destination', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emoji: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timezone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    climate: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
    },
  });
  return Destination;
};
