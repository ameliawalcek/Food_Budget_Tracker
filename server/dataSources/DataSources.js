const MongoClient = require('./MongoClient')
const FoodAPI = require('./FoodAPI')

class DataSources {
    constructor() {
        this.mongoClient = new MongoClient()
        this.foodAPI = new FoodAPI()
    }
}

const dataSources = new DataSources()
module.exports = dataSources