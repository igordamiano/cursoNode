function sum(x) {
    return new Promise((resolve, reject)=>{
        if (Number(x) == NaN || Number(x) == undefined || typeof x != "number") {
            reject('Não é um número válido...');
        }

        setTimeout(()=> {
            resolve(x + 5000);
        }, 3000);
    })
}

async function main(){
    try {
        const result = await sum('#');
        console.log(`Resultado com async/await: ${result}`)
    } catch (error) {
        console.log(`Temos problemas: ${error}`);
        console.log(process.env.USERNAME);
    }
}

main();