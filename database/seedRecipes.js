const client = require("./setup")

const { caribbean } = require("./seedData")
const { jamaican } = caribbean

const seedRecipes = async () => {
    try {
        await client.connect()
        console.log("Awaiting seeding")
        await client.db("duutchie").collection("recipes").drop()
        await client.db("duutchie").collection("recipes").insertMany([
            jamaican.ackeeAndSaltfishSeed
        ])
        console.log("DB seeded")
        await client.close()
    } catch (e) {
        console.log(e)
    }
}

seedRecipes()