const fs = require("fs");

// método NO Blocking
fs.readFile("file.txt", (err, data)=>{
    if (err) throw err;
    console.log(data); 
});
// Instrução Blocking
fs.unlinkSync("file.txt"); // apaga o arquivo

// Problema, removeu o arquivo antes de terminar de ler