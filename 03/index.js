const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();  //instance
const PORT = 8000;

//middleware - plugin of name urlencoded || whenever we recieve form data it will put it in body
app.use(express.urlencoded({extended:false}));   //built in middleware
// urlencoded ==> it did was, fetch data -> made its JS object -> Put it in req body
app.use((req, res, next)=>{
 console.log("Middleware started");
 next();  //to forward the request
});

//abcd
app.use((req, res, next)=>{
    console.log("Middleware started22");
    next();  //to forward the request
   })

app.get('/api/users',(req,res)=>{
    res.setHeader("X-myName", "ishu"); // X represents that it is a custom header
    return res.json(users);
})

app
    .route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);})
    .patch((req, res)=>{
        return res.json({status: "Pending"});
    })
    .delete((req, res)=>{
        return res.json({status : "Pending"});
    })


app.post('/api/users', (req, res) => {
    const body = req.body;                // anything we send data from frontend, express makes it availabe in this body
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
        return res.json({status:"Success", id: users.length});
    });
    
}); 

app.listen(PORT, ()=> console.log(`SERVER STARTED at Port ${PORT}`));