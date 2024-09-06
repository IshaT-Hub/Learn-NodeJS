
const { error } = require("console");
const fs = require("fs");

//Sync
//fs.writeFileSync("./test.txt", "Heloz freeenz");

//fs.writeFile("./test.txt", "Heloz frenz Async", (err) => {})

//To read contact.txt file

//const result = fs.readFileSync('./contact.txt', "utf-8");
//console.log(result);

// fs.readFile('./contact.txt', "utf-8", (err, result) =>{
//     if(err){
//         console.log("error",err)
//     }
//     else{
//         console.log(result);
//     }
// })

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
//const { isUtf8 } = require("buffer");
//const { error } = require("console");
//const fs = require("fs");



//fs.writeFile("./test.txt", "Heloz frenz Async", (err) => {})

//To read contact.txt file

//const result = fs.readFileSync('./contact.txt', "utf-8");
//console.log(result);

// fs.readFile('./contact.txt', "utf-8", (err, result) =>{
//     if(err){
//         console.log("error",err)
//     }
//     else{
//         console.log(result);
//     }
// })

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

//Sync
fs.writeFileSync("./test.txt", "Heloz freeenz");

fs.appendFileSync("./test.txt",`Hey there\n`);