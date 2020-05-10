const fs = require("fs");

// método NO Blocking
fs.readFile("file.txt", (err, data)=>{
    if (err) throw err;
    console.log(data);
    
    fs.unlink("file.txt", (unLinkErr)=>{
        if (unLinkErr) throw unLinkErr;
        console.log("Arquivo Excluído com sucesso");

    }); // apaga o arquivo


});
