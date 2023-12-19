// Synchronous or blocking
// Line by line execution.

// const fs = require('fs');
// const text = fs.readFileSync("./Node.js/dele.txt", "utf-8");
// console.log(text);


// Asynchronous or non-blocking
// Line by line execution not guaranteed.
// Callback will fire.

const fs = require('fs');
const text = fs.readFile("./Node.js/dele.txt", "utf-8" ,(err, data) => {
    console.log(data);
})
console.log("This is a message!");