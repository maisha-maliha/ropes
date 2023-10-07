const user = require('../models/userList');

async function authenticate(uname, upassword){
    const users = await user.getUserList();
    let exist = false;
    users.forEach((item)=>{
        if (item.username == uname && item.password == upassword){ 
            console.log('found');
            exist =  true;
        }
    })
    return exist;
}

module.exports = authenticate;