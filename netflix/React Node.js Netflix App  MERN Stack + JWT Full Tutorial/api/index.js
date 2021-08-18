const  express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

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
app.use("/api/users",userRoute);listRoute
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);

const server = process.env.PORT || 5000;

app.listen(server,()=>{
    console.log(`Server in the port ${server} is running...`)
})