const {app, sess} = require('../app');

// SIGN IN  
app.post('/signin',(req,res)=>{
    const user_exist = finduser(req.body.username,req.body.password);
    if(user_exist){
        req.sess.username = req.body.username;
        res.redirect('/profile');
    }
})
app.get('/hi', (req, res)=>{
    console.log('its working')
    res.end('hi')
})