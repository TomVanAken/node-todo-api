const express = require("express");
const bodyParser = require("body-parser");

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');


const app = express();

app.use(bodyParser.json());

//app.post(url, callback)
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        //Set status 400 to 
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos,
            count: todos.length})
    }, (e) => {
        res.status(400).send(e);
    })
})



app.listen(3000, () => {
    console.log('Started on port 3000');
})

//Exporting app to be able to use it in server.test.js
module.exports = {app};