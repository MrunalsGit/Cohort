// function setT1(ms){
//     return new Promise ( (resolve)=>{
//         setTimeout(resolve, ms);
//     }) 
// }

// setT1(1000)
// .then(()=>{
//     return new Promise ((resolve,reject)=>{
//         console.log("hi1")
//         setTimeout(()=>{
//             console.log("hi2");
//             resolve();
//         }, 3000);
//     })
// })
// .then(()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("hi3");
//             resolve();
//         }, 5000);
//     })
// })






// function setT(ms){
    // return new Promise((resolve)=>{
        // setTimeout(resolve,ms);
    // })
// }
// 
// async function implement(){
    // await setT(1000);
    // console.log("Hi1");
    // await setT(3000);
    // console.log("Hi2");
    // await setT(5000);
    // console.log("Done");
// }
// implement();





// const fs = require("fs");

// function imp(err,data){
    // console.log(data);
// }

// async function eg(){
    // let a = await fs.readFile("a.txt", "utf-8", imp);     // wronog : as readFile doesnt return anything
    // console.log(a);                                       // It return asynchronously 
// }




function perf(a,b){
    return new Promise( (resolve)=>{
        setTimeout(()=>{
            resolve(a+b);
        },5000);
    });
}

async function imp(){
    try{
        let ans = await perf(5,9);
        console.log(ans);
    }
    catch(error){
        console.log("Error");
        alert("Bawal");
    }
}
imp();