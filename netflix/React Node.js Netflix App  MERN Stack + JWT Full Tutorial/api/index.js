const  express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


dotenv.config()

const app= express()

app.use(express.json())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(console.log("DB connected"))
  .catch(err=>console.log(err))

const server = process.env.PORT || 5000;

app.listen(server,()=>{
    console.log(`Server in the port ${server} is running...`)
})