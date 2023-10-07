const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function getAdminList() {
    try {
        const dataset = await client.db('socialmedia').collection('admin').find().toArray();
        console.log(JSON.stringify(dataset));
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
async function postAdminList() {
    try {
        const dataset = await client.db('socialmedia').collection('admin').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
getAdminList();
module.exports = {getAdminList, postAdminList};