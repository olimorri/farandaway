module.exports = (sequelize, DataTypes) => {
  const Invitee = sequelize.define('invitee', {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Invitee.associate = (model) => {
    Invitee.belongsTo(model.trip, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Invitee;
};
