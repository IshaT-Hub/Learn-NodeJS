const fs = require("fs");
const http = require("http");
const url = require("url");

const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New req recieved\n`
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data)=>{
        switch (myUrl.pathname) {
            case "/": res.end("This is home page")
                 break;
            case "/About": 
                const username = myUrl.query.myName;
                console.log(username);
                
                res.end(`Hi, ${username}`);
                 break;
            default: res.end("Error 404");
        }

    });
});

myServer.listen(8000, () => {console.log("SERVER STARTED")});
