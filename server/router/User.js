const express = require("express");
const userRouter = express.Router();
const dataSources = require("../dataSources/DataSources");

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  const user = await dataSources.mongoClient.getUserById(id);
  res.send(user)
})

userRouter.post('/item', async (req, res) => {
  let { userId, itemId, listName } = req.body
  let response = await dataSources.mongoClient.addItem(userId, itemId, listName)
  res.send(response)
})

userRouter.put('/item', async (req, res) => {
  let { userId, itemId, listName } = req.body
  let response = await dataSources.mongoClient.deleteItem(userId, itemId, listName)
  res.send(response)
})

module.exports = userRouter;
