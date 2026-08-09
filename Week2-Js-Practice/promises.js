function setTimer(func){
    console.log(typeof(func));
    setTimeout(func, 5000);
}

function func (){
    console.log("Working");
}

setTimer(func);

let p = new Promise(func);

console.log(p);