// functions in javascript.

// Function declaration or function definition 
// function hello(){
//     console.log("Hello brown max");
// }
// function name(){
//     console.log("My name is Ashesh");
// }
// // Function call or function invocation
// hello();
// name();


// // function to print 1 to 5.

// function print(){
//     for(let i =0; i<= 5;i++){
//         console.log(i);
//     }
// }

// print();

// Question - wap function to print poem

// function poem (){
//     console.log("In the twilight's tender grace, Stars emerge, a celestial embrace. Sparkling gems in the velvet night, Guiding dreams with their gentle light.Whispers of stardust fill the air, Stories told with a cosmic flare. A dance of hope, a song of cheer, Under the sky, everything's clear.Let your heart soar, reach for afar, For in your soul, there lies a star.");
// }


// poem();

// Question> create a function to roll a dice .

// function dice(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// dice();


// ---------->> functon with argument.
// function Printname(name) {
//     console.log(name);
// }

// Printname("ashesh");

// function printinfo(name, age){
//     console.log(`my name is ${name} and my age is ${age} .`);
// }

// printinfo("ashesh", 21);
// printinfo("jai ", 20);
// printinfo("sohan", 22); 

// function sum(a,b){
//     console.log(a+b);
// }

// sum(444,3333);


// // average of 3  number .

// function avg (a,b,c){
//     console.log(Math.floor((a+b+c)/3));
// }

// avg(5,4,1);

// multipuication table .

// function table(a){
//     for(let i=a; i<= a*10; i+=a){
//         console.log(i);
//     }
// }

// table(3);

//---------->> return keyword .

// it is used to retuen some value from the function.

// function ret(a,b){

//     return a+b;
// }

// ret(1,2);

// console.log(ret(ret(1,3),34));


//  function isAdult(age){
//     if (age >= 18) {
//         return "adult";
//     }else{
//         return "not adult";
//     }

//  }

//  console.log(isAdult(15));


//sum of number from 1 to n ;

// function sum(n){

// return Math.floor((n*(n+1))/2);
// }
// console.log(sum(5));

// ------- function to return concationation of all string in an array .

// let str = ["hi", "Hello", "by","!"];

// function concat(str){
//     let res ="";

//     for( a in str){
//         res = res + str[a];
//     }
//     return res;
// }


// ------------->> Scope.

// it determine the acessibility of a variable, object and function from different part of the code.


// --------->> function scope and global scope.


// let sum = 33; // this is global scope.
// function claSum(a,b){
//     // let sum = a+b; // this is function scope.
//     console.log(sum);
// }

// claSum(1,3);
// console.log(sum);


// ----------------->> block scope.

//  {
//     let a = 25; // block scope. in and block of '{}'.
//  }

//  console.log(a);

// --------------->> lexical scope.

// in this we use nested function.

// function outerfun(){
//     let a = 20;
//     let b = 30;

//     function innerfun(){
//         console.log(a+b);
//     }

//     innerfun();
// }

// ---------------->> function expression.

// const sum = function(a,b){
//     return a+b;
// }

// console.log(sum(1,2));


// let hello = function(){
//     console.log("Hello Ashesh");
// }

// hello();

// hello = function(){
//     console.log("Hello Gupta");
// }

// hello();


// --------------------->> high order functions or special functions.

// a  function that does one or both:
//     1> takes one or multiple function as arguments
//     2> return a function.

// let multipleGreet = function (func, count){ // higher order function 
//     for(let i=1;i<= count;i++){
//         func();
//     }
// } 

// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet, 4);


// here the 'func()' if the type of keyword argument is a function and  the function  is a function object. 


// --->> higher order a function return the function as a output.


// function oddOrEven(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0);
//         }
//         return even;
//     }else{
//         console.log("Invalid request");
//     }
// }

// let request = "odd";

 