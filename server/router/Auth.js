const express = require('express')
const authRouter = express.Router()
const bcrypt = require('bcrypt')
const validator = require('validator').default
const { mongoClient } = require('../dataSources/DataSources')

authRouter.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    if (!validator.isEmail(email)) {
        res.status(400).send('The email address was invalid please try again')
    } else {
        const isUserNameTaken = await mongoClient.getUserByEmail(email)
        if (isUserNameTaken) {
            res.status(409).send('The user name is already taken')
        } else {
            const newUser = mongoClient
                .addUser({
                    firstName,
                    lastName,
                    email,
                    password: await bcrypt.hash(password, 10),
                    budget: null,
                    kitchenList: [],
                    shoppingList: [],
                    favoriteRecipes: [],
                    mealPlan: {
                        sunday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } },
                        monday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } },
                        tuesday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } },
                        wednesday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } },
                        thursday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } },
                        friday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } },
                        saturday: { breakfast: { 'id': null }, lunch: { 'id': null }, dinner: { 'id': null } }
                    }
                })

            // res.cookie(newUser.userName, await bcrypt.hash(JSON.stringify(newUser._id), 10), { maxAge: (24 * 60 * 60 * 1000) + Date.now(), domain: 'localhost' })
            newUser
                .save()
                .then(user => {
                    res
                        .status(201)
                        .send(user)
                })
                .catch(error => {
                    res
                        .status(500)
                        .send('Oops the user couldn\'t be saved please try again')
                })
        }
    }
})

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body
    const isUserEmailInDB = await mongoClient.getUserByEmail(email)
    if (!isUserEmailInDB) {
        res.status(401).send('email not in data base')
    } else {
        const hash = isUserEmailInDB.password
        await bcrypt.compare(password, hash)
            ? res.status(202).send({ _id: isUserEmailInDB._id, msg: 'user found in database' })
            : res.status(401).send('passwords does not match')
    }
})

authRouter.post('/cookie', async (req, res) => {
    const { cookie } = req.body

    const result = await mongoClient.isCookieValid(cookie).catch(e => false)
    result
        ? res.status(200).send(true)
        : res.status(401).send(false)
})

module.exports = authRouter