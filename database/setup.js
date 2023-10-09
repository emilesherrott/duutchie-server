require("dotenv").config()
const { MongoClient, ServerApiVersion } = require("mongodb")
const connectionUri = process.env.DB_CONNECTION

const client = new MongoClient(connectionUri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const connectDB = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (e) {
        console.log(e)
    }
}


module.exports = client




