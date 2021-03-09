module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('trip', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Trip.associate = (model) => {
    Trip.hasMany(model.option, { onDelete: 'cascade', hooks: true });
    Trip.hasMany(model.invitee);
    Trip.belongsTo(model.user, {
      foreignKey: {
        allowNull: false,
      },
    });
    // Trip.belongsTo(
    //   model.user,
    //   { as: 'owner' },
    //   {
    //     foreignKey: {
    //       allowNull: false,
    //     },
    //   },
    // );
  };

  return Trip;
};
