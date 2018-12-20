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

    // db.collection("Todos").findOneAndUpdate(
    //     {_id: new ObjectID("5c12b0cede74fe26e04fa1ab")},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // })
    
    //Challange
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5c12bcbd7bf72027cc966c22")
    }, 
    {
        $set: {name: "Tom Van Aken"},
        $inc: {age: 1}
    }, 
    {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //client.close();
})
