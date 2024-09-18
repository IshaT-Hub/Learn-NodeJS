const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();  //instance

const PORT = 8000;

//Route
// GET users - List all users 
app.get('/api/users', (req, res) => {      // renders json data ( hybrid_server)
    return res.json(users);
})

// GET /api/users/1 - List  user with id 1 (with id part dynamic)
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
}); 

app.listen(PORT, ()=> console.log(`SERVER STARTED at Port ${PORT}`));