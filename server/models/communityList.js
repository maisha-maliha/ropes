const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function getCommunityList() {
    try {
        const dataset = await client.db('socialmedia').collection('communitites').find().toArray();
        console.log(JSON.stringify(dataset));
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
async function postCommunityList() {
    try {
        const dataset = await client.db('socialmedia').collection('communitites').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
getCommunityList();
module.exports = {getCommunityList, postCommunityList};