const express = require('express');
const data = require('./data/users.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/users', (req, res) => {
    res.send(JSON.stringify(data));
});

app.listen(port, err => {
    if (err)
        console.error(err);
    
    console.log(`The server is running on port ${ port }`);
});