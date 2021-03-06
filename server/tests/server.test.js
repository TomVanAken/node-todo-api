const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server'); 
const {Todo} = require('./../models/todo');

const dummyTodos = [{text:"First Test Todo"}, {text: "Second Test Todo"}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        console.log('Adding dummies');
        return Todo.insertMany(dummyTodos);
    
    }).then(() => {
        console.log("And done");
        done()
    }).catch((e) => {console.log("beforeEach", e)});

})


describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = "Test todo text";

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err) {
                return done(err);
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        })
    });

    it('should not create todo if data is invalid', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err) {
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));
        })
    })
})

describe('GET /todos', () => {
    it('should return all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
            expect(res.body.count).toBe(2);

        
        }).end(done);
    })
});