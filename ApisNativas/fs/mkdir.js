const fs = require('fs')
const assets = ['css', 'js', 'images', 'fonts', 'lib']

/* cria um diretório
fs.mkdir('projeto', (err)=>{
    if (err) throw err
    console.log('Diretório criado com sucesso.')
})
*/
/*
// cria diretórios
fs.mkdir('projeto/assets/images', {recursive: true}, (err)=>{
    if (err) throw err
    console.log('Diretório criado com sucesso.')
})
*/

function make(dir) {
    dir.forEach((item)=>{

        fs.mkdir(`projeto/assets/${item}`, {recursive: true}, (err)=>{
            if (err) throw err
            console.log('Diretório criado com sucesso:', item)
        })

    })

}
make(assets)