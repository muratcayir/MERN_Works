const express = require("express")
const cors=require("cors")
const helmet=require("helmet")
const config = require("./config")
//const loaders = require("./loaders")


config()
//loaders()

const app=express()
app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT,()=>{
    console.log(`Sunucu ${process.env.APP_PORT} portunda çalışıyor`)
})