require('./sub_dir/sub')
console.log('-----------------------------------------------')
console.log(`Nome do arquivo: `, __filename)
console.log(`Diretório do arquivo `, __dirname)
console.log(`Diretório em que foi invocado `, process.cwd())

//console.log(`Parâmetros `, process.argv)
//console.log(`Váriaveis de ambiente `, process.env) // váriaveis de ambiente
console.log(`SO `, process.env.OS)
console.log(`Usuário `, process.env.USERNAME)
console.log(`Linguagem do SO `, process.env.LANG)
console.log(`Nome do Servidor `, process.env.COMPUTERNAME)



switch(process.argv[2]){
    case '-a':
        console.log('Execute Rotina principal');
        break;

    case '-i':
        console.log('Execute Instalação');
        break;    

    case '-q':
        console.log('Encerrando aplicação');
        process.exit(); // interrompe imediatamente o codigo
        break;    
    default:
        console.log('Parâmetro inválido');        

}

console.log(`Ambiente do servidor `, process.platform)