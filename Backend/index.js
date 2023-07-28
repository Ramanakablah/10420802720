const express = require("express")
const dotenv = require("dotenv")
const cors = require('cors')
const app = express()
app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 5000

app.use("/api/train",require("./Controllers/TrainList"))


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})