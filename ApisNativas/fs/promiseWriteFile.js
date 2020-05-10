const {writeFile} = require('fs')

function criaArquivo(name, content) {
    return new Promise((resolve, reject)=>{

        writeFile(name, content, err=>{
            if(err) return reject(err)
            resolve()
        })
    })
}

criaArquivo('promiseArquivo.txt', 'Conteúdo do arquivo utilizando promise')
    .then(()=>{
        console.log('Arquivo promiseArquivo.txt criado com sucesso.')
    })
    .catch(err=> console.log(err))