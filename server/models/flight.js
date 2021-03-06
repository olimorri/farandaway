module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('flight', {
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outbound: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    inbound: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    minPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carrier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Flight;
};
