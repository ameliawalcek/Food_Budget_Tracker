const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const app = express()
const userRouter = require("./server/router/User")
const recipeRouter = require('./server/router/Recipe')

require("dotenv").config()
const { DB_URL, PORT } = process.env

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  err => {
    console.log('Connected to DB')
    console.log(err)
  }
)

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

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})