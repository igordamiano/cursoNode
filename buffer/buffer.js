const buffer = require('buffer').Buffer
const buff = buffer.from('Curso nodeJs')

console.log(buff)
console.log(buff.toString())
console.log(buff.toString('UTF16LE'))

const buf_string = Buffer.from('Carregando uma string', 'utf-8')
console.log(buf_string.toString())

console.log(Buffer.isBuffer(buf_string))
console.log(buf_string.toString('utf-8', 0, 10), ' : Trouxe 10 posições da frase Carregando uma string')