module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName : {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName : {
      type: DataTypes.STRING,
      allowNull: false
    },
    password : {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};