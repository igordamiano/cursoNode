console.log('Exibindo mensagem no console.')

//erro
console.error(new Error('Exibindo mensagem de erro, temos problemas !!!'))

//tabela
const carros = ['GM', 'Fiat', 'Ford', 'Renault', 'Honda', 'Hyundai']
console.table(carros)

const dados = {name: 'Igor', empresa: 'Vivo'}
console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando processo')
console.countReset('processo')

console.count('processo')

console.time('contador')

for (let index = 0; index < 1000; index++) {
    
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')

console.assert(false, 'Xiiiiii %s, que pena', 'não funcionou!')

// Limpa o console
//console.clear()