const express = require('express');
const {sess} = require('./middleware/session');
const app = express();

app.use(sess);

const signin = require('./routes/signin');
const profile = require('./routes/profile');

app.use('/signin', signin);
app.use('/u', profile);



app.listen(3000);
