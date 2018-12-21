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
var nextTodo = new Todo({
    text: "   Have a meeting   ",
    
});

nextTodo.save().then((doc) => {
    console.log("Todo saved");
    console.log(doc);
}, (e) => {
    console.log("Unable to save", e);
})



