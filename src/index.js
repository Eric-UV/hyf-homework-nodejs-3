const express = require('express');
//const data = require('./data/users.json');
const app = express();
const port = 3000;
const fs = require('fs');
const users = [];

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/user/:id', (req, res) => {
    //let users = JSON.parse(JSON.stringify(data));    
    let user = users.find(user => user.id == req.params.id);
    res.json(user);
});
app.post('/user', (req, res) => {    
    /*console.log(req.body);
    let user = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email
    };*/

    //JSON.parse(JSON.stringify(data));
    users.push({ id: 0 });
    //let allUsers = JSON.stringify(users);
    //fs.writeFileSync(__dirname + '/data/users.json', allUsers);
        
    res.json(users);
});

app.delete('/user/:id', (req, res) => {
    if(users.length > 0){
        users = [];
        res.status(202).json({
            ok: true
        }) 
    }else{
        res.status(204).json({
            ok: true
        });
    }
});

app.listen(port, err => {
    if (err)
        console.error(err);
    
    console.log(`The server is running on port ${ port }`);
});