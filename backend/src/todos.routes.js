const express = require('express');
const allTodos = [{ name: 'aaaa', status: false }];
const todosRoutes = express.Router();

//CREATE
todosRoutes.post('/todos', (request, response) => {
    const { name } = request.body;
    allTodos.push({ name, status: false })
    return (response.status(201).json(allTodos));
})
//READ
//UPDATE
//DELETE


module.exports = todosRoutes;