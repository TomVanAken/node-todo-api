//Object destucturing example
var user = {name: 'Tom', age: 45};
var {name} = user;
console.log(name);
//returns name from user.


//Getting MongoClient and ObjectID using Destructuring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);




MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        console.log("Unable to connect tot MongoDb Server");
        console.log(err);
        return "";
    }

    console.log('Connected to MongoDb');
    const db = client.db('TodoApp');


   /*  db.collection('Todos').insertOne({
        text: 'Someting to do',
        completed: false
    }, (err, result) => {
        if(err) {
            console.log('Unable to insert Todo', err);
            return;
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    }) */

    db.collection('Users').insertOne({
        name: "Tom",
        age: 45,
        location: "Ekeren"
    }, (err, result) => {
        if(err) {
            return console.log("Unable to create user", err);
        }
        
        console.log(result.ops[0]._id.getTimestamp());
    })

    client.close();
})