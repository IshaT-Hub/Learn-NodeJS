const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New req recieved\n`
    fs.appendFile("log.txt",log, (err, data)=>{
        switch (req.url) {
            case "/": res.end("This is home page, server started");
                break;
            case "/About": res.end("Isha Tiwari this side");
                break;
            default: res.end("404 not found");
                break;
        }
    });
    
});  //makes web server


//if everything works fine then callback func will be called and print success msg
myServer.listen(8000, () => {console.log('Server started successfully')});

// we need handler func that handles our incoming requests.
// it takes callback func requestListener that processes incoming requests.