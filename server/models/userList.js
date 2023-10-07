const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function getUserList() {
    try {
        const dataset = await client.db('socialmedia').collection('users').find().toArray();
        // console.log(dataset);
        return dataset;
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
async function postUserList() {
    try {
        const dataset = await client.db('socialmedia').collection('users').find().toArray();
        return dataset;
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}

module.exports = {getUserList, postUserList};