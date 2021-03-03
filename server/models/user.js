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
  
  User.associate = model => {
    User.hasMany(model.trip) //trip - this always needs to be the lowercase name
  };

  return User;
};