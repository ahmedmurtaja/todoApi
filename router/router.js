const addTodo = require('../controller/addTodo');
const deleteTodo = require('../controller/deleteTodo');
const getAll = require('../controller/getAllTodos');
const updateTodo = require('../controller/updateTodo');
const { deleteMany } = require('../database/Schema');

const router = require('express').Router();


router.get('/todos',getAll );

router.post('/todos',addTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);




module.exports = router;