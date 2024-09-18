const express = require('express');

const app = express();  //instance

const PORT = 8000;

app.listen(PORT, ()=> console.log(`SERVER STARTED at Port ${PORT}`));