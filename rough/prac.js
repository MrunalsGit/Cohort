const arr = [1,2,3,4,5];

const arr2 = arr.map((n)=> n*2);
const arr3 = arr.filter( n => {
    if(n%2 == 0) return true;
})

console.log(arr2);
console.log(arr3);
