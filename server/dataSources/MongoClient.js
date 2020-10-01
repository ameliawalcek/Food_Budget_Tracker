const Models = require("../models/Models")

class MongoClient {

    async getUserByEmail(email) {
        return Models.User
            .findOne({ email: email })
            .lean()
    }

    addUser(user) {
        return new Models.User(user)
    }

    async getUserById(id) {
        return Models.User
            .findById(id)
            .lean()
    }

    isCookieValid(cookie) {
        return Models
            .User
            .findById(cookie)
            .lean()
    }

    addFavorite(userId, recipeId) {
        return Models.User
            .findByIdAndUpdate(
                userId,
                { $push: { 'favoriteRecipes': recipeId } },
                { safe: true, upsert: true, new: true })
            .lean()
    }

    addItem(userId, itemId, listName) {
        return Models.User
            .findByIdAndUpdate(
                userId,
                { $push: { [listName]: itemId } },
                { safe: true, upsert: true, new: true })
            .lean()
    }

    deleteItem(userId, itemId, listName) {
        return Models.User
            .findByIdAndUpdate(
                userId,
                { $pull: { [listName]: itemId } },
                { safe: true, upsert: true, new: true })
            .lean()
    }

}
module.exports = MongoClient;
