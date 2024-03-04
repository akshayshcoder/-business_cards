const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/buginess_card') 

module.exports = {sequelize}