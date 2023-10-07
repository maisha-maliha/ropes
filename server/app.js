const express = require('express');
const {sess} = require('./middleware/session');
const app = express();


app.use(sess);
app.get('/bi', (req, res)=>{
    res.end('helo');
})
module.exports = {app, sess};
app.listen(3000);
