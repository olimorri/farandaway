module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define('option', {
    title : {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination : {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    budgetRangeMin: {
      type : DataTypes.STRING,
      allowNull: false
    },
    budgetRangeMax: {
      type : DataTypes.STRING,
      allowNull: false
    },
    startDate : {
      type: DataTypes.DATE,
      allowNull: false
    },
    nights: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isChosen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    }
  })

  Option.associate = model => {
    Option.belongsTo(model.trip, {
      foreignKey: {
        allowNull: false //this will be tripId
      }
    })
  }

  return Option;
}