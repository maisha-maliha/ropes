const userInfo = require('../models/userList');
const userPosts = require('../models/userPosts');

async function userProfile(username){
    let user={};
    let data = await userInfo.getUserList();
    data.forEach(element => {
        if(element.username == username){
            user = element;
        }
    });

    data =  await userPosts.getUserPost(username);
    user.posts = data;
    return user;
}

module.exports = {userProfile};