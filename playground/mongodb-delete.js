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


    //delete many
    //    db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
    //        console.log(result);
    //    });

    //delete one
    //    db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    //        console.log(result);
    //    })

    //findOneAndDelete
    //    db.collection("Todos").findOneAndDelete({completed: true}).then((result) => {
    //        console.log(result);
    //    })

    //Challange
    db.collection("Users").deleteMany({
        name: 'Tom',
        age: 44
    }).then((result) => {
        console.log(result.result);
    });

    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5c12b5ab29a4023c70074d02")
    }).then((result) => {
        console.log(result);
    });

    //client.close();
})
