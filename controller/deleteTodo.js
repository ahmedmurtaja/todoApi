const Todo = require('../database/Schema')

const deleteTodo =  (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(() => res.send('Todo removed'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
}


module.exports = deleteTodo;
