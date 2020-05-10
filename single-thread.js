const crypto = require("crypto");
const start = Date.now();

// Assincrono
// Event Loop através da Libuv -> isso é muito pesado, chama o Thread Pool 
function logHashTime(){
    crypto.pbkdf2("a", "b", 100000 ,512, "sha512", ()=>{
        console.log(`Hash: ${Date.now() - start}`);
    })
}
// Thread Pool dividiu em 4 threads e executaram quase no mesmo tempo
logHashTime();
logHashTime();
logHashTime();
logHashTime();

// Por padrão são 4 threads, a 5 vai demorar
logHashTime();