const  express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const CryptoJS = require("crypto-js")
const authRoute = require("./routes/auth")

const app= express()

dotenv.config()



app.use(express.json())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(console.log("DB connected"))
  .catch(err=>console.log(err))


app.use("/api/auth",authRoute);

const server = process.env.PORT || 5000;

app.listen(server,()=>{
    console.log(`Server in the port ${server} is running...`)
})