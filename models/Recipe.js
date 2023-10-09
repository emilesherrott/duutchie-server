const { ObjectId } = require("mongodb")
const client = require("../database/setup")

class Recipe {
    constructor(data) {
        this.id = data.id,
        this.name = data.name,
        this.description = data.description,
        this.region = data.region,
        this.nation = data.nation,
        this.mealType = data.mealType,
        this.prepTime = data.prepTime,
        this.cookTime = data.cookTime,
        this.cost = data.cost,
        this.imageUri = data.imageUri,
        this.visits = data.vists,
        this.ingredients = data.ingredients,
        this.recipe = data.recipe
    }

    static async getAll() {
        await client.connect()
        const response = await client.db("duutchie").collection("recipes").find()
        const arrayValues = await response.toArray()
        await client.close() 
        return arrayValues
    }


    static async getOne(idx) {
        await client.connect()
        const id = new ObjectId(idx)
        const response = await client.db("duutchie").collection("recipes").find({ _id: id })
        const arrayValue = await response.toArray()
        const recipe = new Recipe(arrayValue[0])
        await client.close()
        return recipe
    }
}

module.exports = Recipe