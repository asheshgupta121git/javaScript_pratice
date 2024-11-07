//-------->> arrays methods.

//--------------->> forEach

// let ar = [1,2,3,4,5];

// let print = function(e){
//     console.log(e);
// }

// ar.forEach(print);

//or

// ar.forEach(function(e){
//     console.log(e);
// });

// or

// ar.forEach((e)=>{
//         console.log(e);
// });

//---------->> using this objedcts .
// let arr = [{
//     name: "ashesh",
//     marks:98
// }, 
// {
//     name: "ajay",
//     marks:93
// },
//  {
//     name:"jai",
//     marks: 90
//  }
// ];

// arr.forEach((el) => {
//     console.log(el.marks);
// })

// ----------------->> Map .

// let num = [1,2,3,4,5];

// let double = num.map(function(e){
//     return e*2;
// });


// let dob = num.map((e) => {
//     return e*2;
// });

// let students = [{
//         name: "ashesh",
//         marks:98
//     }, 
//     {
//         name: "ajay",
//         marks:94.4
//     },
//      {
//         name:"jai",
//         marks: 90
//      }
//     ];


//     let gpa = students.map(e => {
//         return e.marks / 10;
//     })



//--------->> Filter .

// let num = [2,4,1,5,6,2,7,8,9];

// let even = num .filter((e) => {
//     return e%2 == 0;
// });

// let odd = num .filter((e) => {
//     return !(e%2 == 0);
// });


//----------->> Every .

// let n = [1,2,3,4];
// let evn = n.every(e => (e%2 ==0 ));

// // or 
// let even = [2,4].every(e => (e%2 ==0));

// //----------->> Some .


// let odd = [2,4].some(e => !(e%2 ==0));

// let oddd = [2,3,4].some(e => !(e%2 ==0));


//------------>> reduce .
// let sum = [1,2,3,4,5].reduce((a, e) =>{
//     //console.log(a);
//     return a+e;
    
// });

// let max  = [1,2,-3,40,5].reduce((a, e)=>{
//     if(a < e){
//         a = e;
//     }
//     return a;
// });

// or another method to retun max.
// let nums = [2,3,4,5,3,4,7,8,9,11,1];

// let max = nums.reduce((max, e) =>{
//     if(max > e){
//         return max;
//     }else{
//         return e;
//     }
// });

// console.log(max);

// question) check if all numbers in our array is multipleof 10 or not.

// let arr=  [10,20,30,40,54];

// let a = arr.every(e=> (e%10 == 0));

// console.log(a);

//Question ) create a function to find the min in an array  .


// let min = arr.reduce((min ,e) => {
//     if(min < e){
//         return min;
//     }else{
//         return e;
//     }
// });

// console.log(min);


//----------->> Defaults parameters

//giving a default value to the argument.

// function fun(a,b=3){
//     return a+b;
// }


// ---------->> spread;
//  spread the iteratable into multiple value.

// console.log(..."ashesh");

// let arr = [1,2,3,1,2,3,4,5,6,5,4,3,2,1,1,2,4,5];

// // to return a min  and max from Math fumction we use spread '...' 
// let min = Math.min(...arr);
// console.log(min);

// let max = Math.max(...arr);
// console.log(max);

//---------->> spread with array literals.

// let arr = [1,2,3,4,5];

// let newarr = [... arr];

// let char = ["ashesh"];

// let newchar = [...char];

// let odd = [1,3,5,7,9];
// let even = [2,3,6,8,10];

// let nums = [...odd,...even];

//------------>> spread with object literals.
// let data = {
//     gmail: "tony@gmail.com",
//     password: "adshsahk"
// };

// let newdata = {...data, uid:121};


// let arr = [1,2,3,4,5];

// let obj = {..."hello"};
// let obj1 = {...arr};


//------------->> rest.

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
// }

// function sum(...args){
//     return args.reduce((a,b) => a+b);
// }

// function min(msg,...args){
//     console.log(msg);
//     return args.reduce((a,b) => {
//         if(a<b){
//             return a;
//         }else{
//             return b;
//         }
//     })
// }


//----------------->> Destructuring .

// let names = ["tony","jhon", "maya", "raghav","sonam","jai","mohan","sohan"];

// let [winner, runnerUp, secondRunnerUp, ...others] = names;
// console.log([winner, runnerUp, secondRunnerUp]);

// here by using '...others' we combining the concepts of destructuring and rests.


//---->> destructuring with objects .

// const stu ={
//     name: "jai",
//     age: 14,
//     class:9,
//     sub: ["hindi","english", "maths", "science", "social"],
//     username: "jai@123",
//     password: "abcd",

// }

// let {username : user, password: seceret, city:place = "vns"} = stu;


// questions) Square and sum the array elements using the arrow function and then find the average of the array.

// let nums = [1,2,3,4,5];

// const square = nums.map((e) => e*e);

// const sum  =  square.reduce((sum, e) => sum+e);

// let avg = sum/square.length;

// console.log(`square is : ${square} , sum is : ${sum}, avg is : ${avg}`);


// Question) Create a new array using the map function whose each element is equal to the original element plus 5.

// let arr = [1,2,3,4,5];

// const plus5 = arr.map(e => e+5);
// console.log(plus5);

// question) . Create a new array whose elements are in uppercase of words present in the original array.

// let names = ["jai", "jim", "jhon", "jenny", "karl"];

// const upper = names.map(e => e.toUpperCase());

// console.log(upper);


//Question) Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled 


// const doubleAndReturnArgs = (arr, ...args) =>[
//     ...arr, ...args.map(v => v*2),
// ]

// doubleAndReturnArgs([1,2,3,4], 4,4);


// Questions) Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// const mergeObjects =(obj1,obj2) => ({...obj1, ...obj2});

// mergeObjects({a:1,b:2,c:3}, {d:4,e:removeEventListener,f:6});
