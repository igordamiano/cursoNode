const fs = require("fs"); //biblioteca de File System

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo");

const dados = fs.readFile("file.txt", (err, data)=>{
    if(err) throw err;
    console.log("Terminei leitura de file.txt")
}); // No Sync = No blocking

// No Sync ele continua executando

console.log("Após leitura do arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));
