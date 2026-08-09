const fs = require('fs');
const {program} = require ('commander');    

program.command('count_words')
    .argument('<fileName>', 'file to count words') 
    .action((fileName)=>{
        let data = fs.readFile(fileName, "utf-8", (err,data)=>{
            if(err){
                console.log("Error occured");
            }
            else{
                let arr = data.split(" ");
                console.log(arr.length);
            }
            
        });
    });

program.parse();