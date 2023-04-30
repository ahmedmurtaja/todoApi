const Todo = require('../database/Schema')


const updateTodo = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.text = req.body.text;
      todo.completed = req.body.completed;
      return todo.save();
    })
    .then(todo => res.json(todo))
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
};

module.exports = updateTodo;
