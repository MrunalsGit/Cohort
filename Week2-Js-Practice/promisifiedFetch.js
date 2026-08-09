function prFetch(){
    return new Promise( (resolve,reject) =>{
        fetch("url")
        .then((Response)=>{
            resolve(Response);
        })
        .catch( (err)=>{
            reject(err);
        })
        
        
    })
}

prFetch()
.then( ()=> console.log("Worked "))
.catch( (err) => console.log("Didn't"));