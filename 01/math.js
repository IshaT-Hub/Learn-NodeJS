// function add(a,b) {
//     return a+b;
// }

// function sub(a,b) {
//     return a-b;
// }

//default exports 
// module.exports ={
//     add, sub
// }

// or module.exports = add;

//or module.exports = {
//     addfn: add,
//     subfn: sub
// }

// for multiple exports
exports.add = (a,b) => a + b;
exports.sub = (a,b) => a - b;