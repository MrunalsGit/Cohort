console.log("Line 1");

setTimeout( () =>{console.log("Line 2")} , 0);

console.log("Line 3");

let a = 1;
for(let i = 0; i < 101; i++){
    a += i;
}

console.log(a);

for(let i = 0;  i < 101; i++){
    a -= 1;
}

setTimeout(() => {console.log("line 4")}, 0);

console.log(a);