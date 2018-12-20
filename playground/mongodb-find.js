//Object destucturing example
var user = { name: 'Tom', age: 45 };
var { name } = user;
console.log(name);
//returns name from user.


//Getting MongoClient and ObjectID using Destructuring
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);




MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log("Unable to connect tot MongoDb Server");
        console.log(err);
        return "";
    }

    console.log('Connected to MongoDb');
    const db = client.db('TodoApp');


    db.collection('Users').find({ name : "Tom"}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    })

    db.collection('Users').find({ age : {$lt: 18}}).toArray().then((docs) => {
        console.log('Users under 18');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    })


    db.collection("Todos").find({
            _id: new ObjectID("5c1bf1f5ee36d508dc987290")
        }).toArray().then((docs) => {
        console.log("Find by ID");
        console.log(JSON.stringify(docs, undefined, 2));
    })
    //client.close();
})
