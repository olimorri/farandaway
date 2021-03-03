module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('trip', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Trip.associate = model => {
    Trip.hasMany(model.option)
    Trip.belongsTo(model.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Trip;
}