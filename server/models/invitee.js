module.exports = (sequelize, DataTypes) => {
  const Invitee = sequelize.define('invitee', {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Invitee.associate = (model) => {
    Invitee.belongsTo(model.user, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Invitee;
};
