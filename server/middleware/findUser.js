const user = require('../models/userList');

async function findUser(uname){
    const users = await user.getUserList();
    let exist = false;
    users.forEach((item)=>{
        if (item.username == uname){ 
            console.log('found');
            exist =  true;
        }
    })
    return exist;
}

module.exports = findUser;