// // loops in java script 
// for(let q =0;q<= 5; q++){
//     console.log(q);
// }
// // print all odd and even numbers from 1 to 15
// console.log("Odd numbers between 1 and 15:");

// for(let i=1;i<=15;i= i+2){
//     console.log(i);
// }

// console.log("Even numbers between 1 and 15:");
// for(let i=2;i<=15;i = i+2){
//     console.log(i);

// }

// console.log("printing all number from 15 to 1");
// for(let i =15; i>=1;i--){
//     console.log(i);
// }

// print the multiplecation table of 5
// for(let i=1;i<=10;i++){
//     console.log(5*i);
// }

// let n = prompt("Enter a number");
// console.log("Multiplication table of", n);
// for(let i=1;i<=10;i++){
//     console.log(n*i);
// }

// ----------->> nested loops .
// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// ---------------->> while loops.
// console.log("this is while loop");
//  let i =1;
//  while(i<=5){
//     console.log(i);
//     i++;
//  }

//  let e = 20;
//  while(e>= 1){
//     console.log(e);
//     e--;
//  }

// guss the fav game
// console.log("guss game");

// const fav = "avatar";
// let guss = prompt("guss");

// while(guss != fav){
//     if(guss == "quit"){
//         console.log("quit the game");
//         break;
//     }
//     guss = prompt("wrong! guss again");
// }

// if(guss == fav){
//     console.log("congrats! you won");
// }
//----------------->> break keyword .
// it is used to exit the loop immediately.

// let n = 4;
// while(n>=0){
//     console.log(n);
//     n--;
//     if(n == 2 ){
//         break;
//     }
// }

// console.log("use break at 2");

// loops with arrays

// let fruits = ["apple", "banana", "orange", "grape"];

// for(let i=0; i<fruits.length; i++){
// console.log(i, fruits[i]);
// }

// console.log("in reverse");
// for(let i = fruits.length-1; i>=0; i--){
// console.log(i, fruits[i]);
// }


// loops with nested array

// let heros = [ ["ironman", "spiderman", "thor", "hulk", "caption america"], ["superman", "batman","wondermen","flash","shizam"] ]
// for(let i = 0; i<heros.length; i++){


//    for(let j = 0; j<heros[i].length; j++){
//        console.log(`j=${j} , ${heros[i][j]}`);
//    }
// }

// let student  = [["aman", 95], ["rahul", 85], ["akash", 90]];
// for(let i =0;i<student.length; i++){
//     console.log(i);
//     for(let j =0; j<student[i].length;j++){
//         console.log(`index ${j}, ${student[i][j]}`);
//     }
// }

// questions  delete the occurence of num 

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// console.log(arr);
// for(let i=0;i<arr.length; i++){
//     if(arr[i] == num ){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//  write a program to find No. of digit 
// let num  = 287152;
// let copy = num;
// let count  = 0;

// while(copy > 0 ){
//     copy = Math.floor(copy/10);
//     count++;
// }

// console.log(count);
 // program to find sum of digits in a number.
// let a = 287152;
// let sum = 0;
// let co = a;

// while(co> 0 ){
//     sum  = sum + (co%10);
//     co = Math.floor(co/10);
// }

// console.log(sum);


// print a factorial of a number.

// let n = 7;

// let fact = 1;

// for(let i=1; i<=n; i++){
//     fact = fact * i;
// }

// console.log(fact);


//find the largest number in an array.

// let arr = [2,5,7,8,1,4];

// let max = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i] > max && max >0){
//         max = arr[i];
//     }
// }

// console.log(max);


