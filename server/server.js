const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');



var Todo = mongoose.model('Todo', {
    text: {
        type: String, 
        required: true,
        minlength: 1,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: "Cook diner"
// });

// newTodo.save().then((doc) => {
//     console.log("Saved Todo", doc);
// }, (e) => {
//     //Error handling save
//     console.log("Unable to save Todo");
// })

//Challenge
// var nextTodo = new Todo({
//     text: "   Have a meeting   ",
    
// });

// nextTodo.save().then((doc) => {
//     console.log("Todo saved");
//     console.log(doc);
// }, (e) => {
//     console.log("Unable to save", e);
// })



var User = mongoose.model("User", {
        email: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        }
});

var newUser= new User({
    email: ' tom@test.com   '
})

newUser.save().then((doc) => {
    console.log("New User saved");
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save new User');
    console.log("Message: ", e.message);
    console.log("Errors: ", e.errors);
})