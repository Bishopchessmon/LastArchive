const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');


app.listen(4600, (req, res) => {
    console.log('EXPRESS IS HERE!')
});