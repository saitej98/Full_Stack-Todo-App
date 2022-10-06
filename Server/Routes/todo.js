const express = require('express');
const { getAllTodos, createTodo } = require('../Controllers/todo');

const todoRouter = express.Router();

todoRouter.get('/getAllTodos', getAllTodos);
todoRouter.post('/createTodo', createTodo);


module.exports = {todoRouter};