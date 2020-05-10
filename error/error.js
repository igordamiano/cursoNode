//throw new Error('Deu erro! - Analise o erro!!!!')
//console.log('Depois do erro não executa!!')

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Deu erro! - Analise o erro!!!!')
}

function init(){
    try {
        execute()
    } catch (e) {
        console.log(`Temos um problema: ${e}`)
    }
}

init()
console.log('Não para de executar depois do erro....')