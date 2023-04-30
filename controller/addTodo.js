const Todo = require('../database/Schema');
const addTodo = (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save()
    .then(todo => res.json(todo))
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
}

module.exports = addTodo;