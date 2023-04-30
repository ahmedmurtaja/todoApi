const Todo = require('../database/Schema')
const getAll = (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
}


module.exports = getAll;