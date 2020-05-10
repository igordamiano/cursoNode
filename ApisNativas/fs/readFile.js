const fs = require('fs')

// assincrona - não bloqueante
fs.readFile('texto.txt', (err, data)=>{
    if (err) throw err;
    
    //console.log(data.toString())
})

// sincrona - bloqueante
const texto = fs.readFileSync('texto.txt');
console.log(`Texto: ${texto}`)

