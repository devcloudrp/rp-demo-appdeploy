const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('We are away from home');
});

app.listen(3000);