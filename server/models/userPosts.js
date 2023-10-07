const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function getUserPost(uname) {
    try {
        const dataset = await client.db('socialmedia').collection('userposts').find({username:uname}).toArray();
        return dataset;
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
async function postUserPost() {
    try {
        const dataset = await client.db('socialmedia').collection('userposts').find().toArray();
        return dataset;
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}

module.exports = {getUserPost, postUserPost};