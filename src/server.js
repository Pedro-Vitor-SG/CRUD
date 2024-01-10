const express = require('express');
const todosRoutes = require('./todos.routes');
const app = express();

app.use(express.json())
app.use(todosRoutes);

app.get('/health', (req, res) =>{
    return res.json('UP');
})

app.listen(3333, () => console.log('server up in 3333'))