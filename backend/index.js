const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const productRoutes = require("./src/routes/ProductRoutes")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/products",productRoutes)
mongoose.connect(process.env.MONGO_URI)

app.listen(4000,console.log("Server is Listening"))