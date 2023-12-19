const fs = require('fs');

// to read the file.
let text = fs.readFileSync("./Node.js/dele.txt", "utf-8"); 
console.log(text);

// to write the file.
text = text.replace("Developer", "Jayanta");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("./Node.js/Jayanta.txt", text);