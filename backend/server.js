const express = require("express");
const common_router = require("./router/common.router");
require('dotenv').config();
const app = express()

app.use("/api/v1",common_router )


app.listen(process.env.PORT, (res, err)=>{
    if(err)
        console.log("err :", err);
    else
        console.log("run on port : ", process.env.PORT);
})