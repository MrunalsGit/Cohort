// function promiseFunc (time){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=> console.log("Works"), time);
//     })
// };

// promiseFunc(1000);
// promiseFunc(5000);

// const a = new Promise(function(resolve,reject){
    
// })

// setTimeout(()=> console.log("Works"), 1000);

new Promise( (resolve,reject)=>{
    setTimeout(()=> {
        console.log("Time out done");
        // resolve();
    }, 1000);
})
.then(console.log("Then executed"));
