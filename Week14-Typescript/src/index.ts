// let x:number | string = 1;
// x = 'dfbg';
// console.log(x);

// function greet(name:string){
//     console.log("Hello ", name)
// }
// greet("Mrunal")

// function sumIt(a:number, b:number){
//     return(a+b)
// }
// let a:number = sumIt(4,3)
// console.log(a);

// function isLegal(age: number): boolean{
//     return (age > 18)
// }
// let a = isLegal(20)
// console.log(a)

// function print(){
//     console.log("Worked")
// }
// function wait1sec(func: ()=> void){
//     setTimeout(func,1000)
// }
// wait1sec(print)

// function print2(name : string){
//     console.log(name)
// }
// function after1sec(func : (x:string)=>void,name:string){
//     setTimeout(()=>func(name),1000)
// }
// after1sec(print2,"Mrunal")

// function hi(user : {
//     "name" : string
// }) {
//     console.log(user.name)
// }
// let x :{
//     name: string
// } = {
//     name : "bc"
// }
// hi(x);

// interface User{
//     name : string,
//     age? : number
// }
// interface Employee{
//     user : User,
//     phone : string
// }
// let x : Employee = {
//     user: {
//         name: "abc"
//     },
//     phone : "0u384"
// }

// interface People{
//     name : string,

//     greet(name : string):string
// }
// let x:People = {
//     name : "Ram",
//     greet : (name : string)=> "Hello"+name
// }
// let greetings :string = x.greet("Abc")
// console.log(greetings);

// interface User{
//     name : string,
//     age : number,
//     greet(): string
// }
// class Manager implements User{
//     constructor(public name : string,public age : number ){
//         this.name = name
//         this.age = age
//     }
//     greet(){
//         return "hi"
//     }
// }

// //Extent class
// interface dimen{
//     h : number,
//     w:number
// }
// class Shape implements dimen{
//     constructor(public h:number, public w:number){
//         this.h = h
//         this.w = w
//     }
//     area(){
//         return this.h + this.w
//     }
// }
// class Rect extends Shape{
//     diag : number
//     constructor(h:number, w:number, diag:number){
//         super(h,w)
//         this.diag = diag
//     }
// }
// let x = new Rect(1,2,3)
// console.log(x.area(), " " , x.diag)

// //Abstract class
// abstract class shape{
//     h:number
//     constructor(h : number){
//         this.h= h
//     }
//     abstract height():string
//     hello(){
//         console.log("This is a shape w/ h = ", this.h)
//     }
// }
// class Rect extends shape{
//     w : number
//     constructor(h:number, w:number){
//         super(h)
//         this.w = w
//     }
//     height(){
//         return "height = " + this.h
//     }
// }
// let x = new Rect(1,2)
// x.hello()

// -----Arrays-----
// function findMax (arr : number[]) : number{
//     let mx : number = arr[0]!
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]! > mx) mx = arr[i]!;
//     }
//     return mx
// }
// let arr : number[] = [10,120,31,24,13];
// let mx = findMax(arr);
// console.log(mx);

// interface User{
//     name : string,
//     age : number
// }
// function check (arr : User[]){
//     return arr.filter((val => val.age > 17))
// }
// let arr : User[] = [{name : "Mrunal",age : 22},{name : "Gaurav", age : 18}]
// console.log(check(arr))

// //Intersection in interface
// interface A {Fname : string}
// interface B {age : number}
// interface mixAB extends A,B {}
// let rand : mixAB = {
//     Fname: "Abc",
//     age : 25
// }

// //Union in types
// type A = {name : string, salary : number}
// type B = {age : number}
// let random : A | B = {
//     name : "abc",
//     salary : 2999999
// }

// interface User{
//     age : number
// }
// function check (u1 : User, u2 : User){
//     return u1.age + u2.age;
// }
// console.log(check({age:40},{age:21}))

// //Enum
// enum Direction{
//     Up = 10,
//     Down
// }
// function doSomething(keyPressed : Direction){
//     console.log(keyPressed)
// }
// doSomething(Direction.Down)

// //Generics
// function printIt <T>(arr : T[]){
//     console.log(arr[0]);
// }
// printIt([1,2,3])
// printIt(['a','b'])

// interface trim{
//     name:string,
//     age:number
// }
// type trimmed = Pick<trim, "name">
// function check (val : trimmed){
//     console.log(val)
// }
// let user : trim = {name:"Ram",age:50}
// check(user)

// //Record
// type Role = Record<string,string>
// let data : Role = {
//     Mrunal : "Admin",
//     "X" : "Manager"
// }

type User = Record<"name" | "age", string >
let x : User = {
    name : "Mrunal",
    age : "20"
}