// setTimeout 3000 milisegundos para executar a próxima instrução
// executa somente o setTimeout e não executa a função soma
// para resolver problema, usa o callback
function soma(x, callback) {
    return setTimeout(()=> {
        return callback(null, x + 5000);
    }, 3000);
}
// esperou os 3 segundos e executou a função de callback

function escreve(){
    console.log(`Executando a função soma: `, soma(270));
}

//escreve();

// callback function
function resolveSoma(err, resultado){
    if(err) throw err;
    console.log(resultado);
}

soma(200, resolveSoma);
// no Node, todas APIs assincronas, vão esperar no ultimo parametro um callback