const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/toDo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', todoSchema);


module.exports = Todo;