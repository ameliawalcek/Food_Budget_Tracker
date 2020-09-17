const express = require("express")
const app = express()
const bodyParser = require("body-parser")
require("dotenv").config()
const userRouter = require("./server/router/User")
const recipeRouter = require('./server/router/Recipe')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*")
  // res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Origin", req.headers.origin)
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,UPDATE,OPTIONS")
  next()
});

app.use("/user", userRouter)
app.use("/recipe", recipeRouter)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})