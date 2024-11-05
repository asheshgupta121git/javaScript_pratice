// creating objects literals.

// const a  = {
//     name:"ashesh",
//     age: 23,
//     marks: 94.3,
//     city: "delhi"
// };

// let delhi = {
//     latitude: "0",
//     longitude: "0"
// }

// let item = {
//     price: 100,
//     discount:50,
//     color: ["red", "green"]
// };

//Q > create a n objet for the properties of twitter post.

// const post = {
//     username:"@ashesh gupta",
//     content:"#filmy",
//     likes: 50,
//     repost: 30,
//     tags: ["#bollywood", "#celebs"]
// }


// // get values form object
// console.log(post["tags"]); 
// console.log(post.username);


// const ob = {
//     1:"a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"   
// }
 

// add and update value in objects literal .

// creation 
// const stu = {
//     name: "ashesh",
//     age: 23,
//     roll: 10,
//     marks : 99.9,
//     city : "delhi" 
// }

// console.log(stu);

// // updation 
// stu.name = "ashesh gupta";
// stu["city"] = "varanasi";

// console.log(stu);


// // addetion 
// stu.gender  = "male";

// console.log(stu);

// // change 
// stu.marks = "A";
// console.log(stu);


// // deletion 
// delete stu.marks;

// console.log(stu);

// object of objects 
// strong indormation of multiple students 

// const classInfo = {
//     aman : {
//         grade: "A+",
//         city: "Delhi"
//     },
//     ashesh : {
//         grade: "A",
//         city: "varansi",
//     },
//     jai : {
//         grade : "O",
//         city : "mirzapur"
//     }
// };

// console.log(classInfo);
// console.log(classInfo.ashesh);
// console.log(classInfo.ashesh.grade);

//Arrays of Objects 
// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {   
//         name: "ashesh",
//         grade: "A+",
//         city: "varansi"
//     },
//     {
//         name: "jai",
//         grade: "O",
//         city: "mirzapur"
//     }
// ];

// console.log(classInfo);
// console.log(classInfo[1]);
// console.log(classInfo[1].name);
 
// // addition 
// classInfo[1].gender= "male";

// console.log(classInfo[1]);

// updation 
// classInfo[1].city = "vns";

//Maths Object 
 // basic property 
//  1> Math.Pi 
//  2> Math.E

// Methods
// 1> Math.abs()
// 2> Math.floor()
// 3> Math.ceil()
// 4>Math.pow(a,b)
// 5> Math.sqrt()
// 6> Math.random()


// Q ) generate random numbers between 1 and 100.

// for(let i =1; i<=100;i++){
//     console.log(Math.floor(Math.random() * 100 )+1);
// }


// Q) gessing game  
// user enter a max number and then tries to guss a random generated number between 1 tp max.

// const max = prompt("enter a max num ");
// const random = Math.floor(Math.random() * max) + 1;
// let guss  = prompt("guss the num ");
// while(true){
//     if(guss  == 'quit'){
//         console.log("quit the game");
//         break;
//     }
//     if(guss == random){
//         console.log("congrats you won", random);
//         break;
//     } else if(guss > random){
//       guss =   prompt("less guss again");
//     }else{ 
//         guss =   prompt("more guss again");  
//     }
// }


