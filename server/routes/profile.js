const express = require('express');
const router = express.Router();
const session = require('../middleware/session');
const findUser = require('../middleware/findUser');
const { userProfile } = require('../controllers/userController');


router.get('/*',async (req,res)=>{
    let route = req.path;
    let routeLength = route.length;
    let routeWithoutSlash = route.slice(1,routeLength);

    let exist = await findUser(routeWithoutSlash);
    
    if (exist && routeWithoutSlash === req.session.username) {
        const user = userProfile(routeWithoutSlash);
        res.end(user);
    }
    else if(req.session.username){
        res.redirect(`/${req.session.username}`);
    }
    else{
        res.redirect('/signin');
    }
})

module.exports = router;

