const express = require("express")
const cors = require("cors")

const logger = require("./logger")
const recipeRouter = require("./routes/recipeRoutes")

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger)

app.use("/", recipeRouter)


module.exports = app