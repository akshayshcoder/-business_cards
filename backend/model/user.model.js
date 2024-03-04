const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    fullName: {
      type: DataTypes.STRING,
    },
    
    age: {
      type: DataTypes.INTEGER,
    },
  
    employed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  User.sync({ alter: true }).then(() => {
    console.log("User Model synced");
  });

module.exports = {User}