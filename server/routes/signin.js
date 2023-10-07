const express = require('express');
const router = express.Router();
const session = require('../middleware/session');
const authenticate = require('../middleware/authentication');

// SIGN IN  
router.post('/signin',(req,res)=>{                  
    const user_exist = authenticate(req.body.username,req.body.password);
    if(user_exist){
        req.session.username = req.body.username;
        res.redirect(`/u/${req.body.username}`); 
    }
})

module.exports = router;
