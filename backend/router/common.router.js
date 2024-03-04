const express = require('express');
const { sequelize } = require('../config/db.config');
const { User } = require('../model/user.model');
const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        User.create(
            {
                    email: "mike@example.com",
                    fullName: "Mike Smith",
                    age: 30,
                    employed: true
            }
        )
        return res.status(200).json({message:"connect done"})
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return res.status(400).json({error:error})
      }
})

module.exports = router