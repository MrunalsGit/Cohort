function prSetTimeout(ms){
    return new Promise( (resolve,reject) =>{
        setTimeout(resolve,ms);
    })
}

// async function imp(ms){
//     await prSetTimeout(ms);
//     console.log("Timer of", ms, " Done!");
// }

// imp(5000)

// function cb(){
// 
// }
// 
// async function to(ms){
    // await setTimeout( cb,ms);
    // console.log("Works");
// }
// to(10000);

prSetTimeout(1000)
.then(()=>{
    console.log("Hi");
    return prSetTimeout(3000);
})
.then(()=>{
    console.log("Hellow");
    return prSetTimeout(5000);
})
.then(()=>{
    console.log("Hi Hellow");
})