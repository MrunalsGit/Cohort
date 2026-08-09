// Code 1
// let fs = require("fs");

// function promisifiedCleanFile(name){

//     return new Promise ((resolve,reject)=>{
//         let data = fs.readFile(name,"utf-8", (err,data)=>{
//             if(err){ 
//                 reject(err);
//             }
//             else{
//                 data = data.trim();
//                 fs.writeFile(name,data,()=> resolve());
//             }
//         })
//     });
// }





// async function cleanIt(){
//     try{
//         const p = await promisifiedCleanFile("a.txt");
//         console.log(p);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log("Anyways");
//     }
// }

// cleanIt();


// Code 2
let fs = require("fs");

function PromisifiedVersion(fileName){
    return new Promise ( (resolve,reject)=>{
        let data = fs.readFile(fileName, "utf-8",(err,data)=>{
            if(err){
                console.log("Error");
                return reject(err);
            }
            else{
                data = data.trim();
                fs.writeFile(fileName,data,()=>resolve());
            }
        });
    })
}

// Async/await way to implement
async function cleanIt(fileName){
    try{
        await PromisifiedVersion("a.txt");
        console.log("a.txt cleaned!");
    }
    catch(err){
        console.log("Error occured: ", err);
    }
    
}

cleanIt();

// .then() way

PromisifiedVersion("a.txt").then(()=>{
    console.log("a.txt cleaned!");
})
.catch((err)=>{
    console.log("Error : ", err);
})