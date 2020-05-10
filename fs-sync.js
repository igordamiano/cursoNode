const fs = require("fs"); //biblioteca de File System

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo");

const dados = fs.readFileSync("file.txt"); // Sync = blocking

// Só vai executar as próximas instruçoes assim que terminar o método blocking

console.log("Após leitura do arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));
