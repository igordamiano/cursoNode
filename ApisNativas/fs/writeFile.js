const {writeFile} = require('fs')

writeFile('saida.txt', 'Conteúdo do arquivo - com writeFile', err =>{
    if(err) throw err
    console.log('Arquivo criado com sucesso.')
})