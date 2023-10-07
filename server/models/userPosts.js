const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function getUserPost() {
    try {
        const dataset = await client.db('socialmedia').collection('users').find().toArray();
        console.log(JSON.stringify(dataset));
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
async function postUserPost() {
    try {
        const dataset = await client.db('socialmedia').collection('users').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
getUserPost();
module.exports = {getUserPost, postUserPost};