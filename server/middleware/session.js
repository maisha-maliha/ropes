const session = require('express-session');


const sess = session({
    secret: 'hsh',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60000
    }
});
sess.username = 'maluma';
module.exports = {sess};
