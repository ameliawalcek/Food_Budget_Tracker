const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    budget: Number,
    kitchenList: [Number],
    shoppingList: [Number],
    favoriteRecipes: [Number],
    mealPlan: {
        sunday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        },
        monday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        },
        tuesday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        },
        wednesday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        },
        thursday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        },
        friday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        },
        saturday: {
            breakfast: { 'id': Number },
            lunch: { 'id': Number },
            dinner: { 'id': Number },
        }
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User