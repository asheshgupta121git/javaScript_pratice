//--------this keyword.

// const student = {
//     name: "ashesh",
//     age: 21,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(`name : ${this.name}, avg: ${avg}`);
//     }
// }

// function getAvg() {
//     console.log(this);
// }


//------------>> try and catch.
// the try statement allows you to define a block of code to be tested for error while it is being executed.

//the catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// try {
//     console.log(a);
// } catch {
//     console.log("variable doesnt exist");
// }
// let a = 49;
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// try {
//     console.log(a);
// } catch{
//     console.log(" a not found");
// }

// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");




// -------------->> arrow functions.

// const sum = (a,b) => {
//     console.log(a+b);
// };

// const cube = (m)=>{
//     return m*m*m;
// }

// const pow = (a,c)=>{
//      return a ** c;
// }

// const squar = a => {
//     return a*a;
// }

// const hello = () => {
//     console.log("hello world");
// }

//---->> implicit return in arrow functions .

// const mul = (a,b) => (a*b);

// const sum = (a,b) => (a+b);

// const cube = m => (m*m*m);

// const hello = () => ("hello");

//------->> setTimeout function .

// console.log("hi");

// setTimeout(() => {
//     console.log("ashesh");
// },4000);

// console.log("what's happening");
// console.log("what's happening");
// console.log("what's happening");
// console.log("what's happening");
// console.log("what's happening");
// console.log("what's happening");

//-------------->> setInterval function.

// let id = setInterval(() => {
//     console.log("ashehs");
// },2000);


// console.log(id);

// let id2 = setInterval(() => {
//     console.log("gupta");
// },
// 3000);

// console.log(id2);

// to stop it we use clearInterval function.

// clearInterval(id);
// clearInterval(id2);


//---------->> this with arrow functions.


// const student = {
//     name: "aman",
//     marks : 98,
//     prop: this, // global scope
//     getName: function(){
//         console.log(this);
//         return this.name;
//     },

//     getMarks: () =>{
//         console.log(this); // parent's scope -> window
//         return this.marks;
//     },
//     getinfo1: function(){
//         setTimeout(()=>{
//             console.log(this); // student object 
//         }, 2000);
//     },
//     getinfo2: function(){
//         setTimeout(function(){
//             console.log(this); // window object.
//         },2000)
//     }
// };

// const a= 5; // global scope.



// Question :

// const square = n =>(n*n);

// let id = setInterval(()=>{
//     console.log("hello world!");
// },2000)

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("time out!");
// },10000)

// question : write a arrow function that accept an array of number and return the average of those numbers.


// let arr=[1,2,3,4,5];

// const avg = (arr)=>{

//         let sum = 0;
//         for(let a of arr){
//             sum += a;
//         }

//         return sum/ arr.length;
// }


// // const isEven = n =>{
// //     if(n%2 == 0 ){
// //         return true;
// //     }else{
// //         return false;
// //     }
// // }

// const isEven = n => n%2 == 0;