const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    // userName: String,
    // password: String,
    // email: String,
    budget: Number,
    pantry: [Number],
    shoppingList: [Number],
    favoriteRecipes: [Number],
    plannedRecipes: { type: Array, 'default': [] }
})

const User = mongoose.model('User', UserSchema)
module.exports = User