const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function getCommunityPosts() {
    try {
        const dataset = await client.db('socialmedia').collection('communityposts').find().toArray();
        console.log(JSON.stringify(dataset));
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
async function postCommunityPosts() {
    try {
        const dataset = await client.db('socialmedia').collection('communityposts').find().toArray();
        return JSON.stringify(dataset);
    }
    catch {
        console.log("db closed");
        await client.close();
    }
}
getCommunityPosts();
module.exports = {getCommunityPosts, postCommunityPosts};