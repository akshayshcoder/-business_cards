const express = require("express")
require('dotenv').config();

const app = express()


app.listen(process.env.PORT, (res, err)=>{
    if(err)
        console.log("err :", err);
    else
        console.log("run on port : ", process.env.PORT);
})