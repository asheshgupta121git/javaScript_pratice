//--------------------------------------call stack--------------------
// function hello(){
//     console.log("calling from inside hello");//3
//     console.log("hello")//4
// }

// function callingHello(){
//     console.log("calling hello function");//2
//     hello();
//     console.log("calling after hello function");//5
// }

// console.log("calling callingHello function");//1
// callingHello();
// console.log("call end");//6


// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


//----------------------------single threaded nature of js ---------------

let h1 = document.querySelector('h1');
//change color function
// function changeColor(color){

//     h1.style.color = color;
// }
//but this function cannnot work asynchrnously because it will execute on time because we are passing function directly here "changeColor("...")" this will execute so....



// we can pass the setTimeout function in the change color function with dealy.

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     }, delay);
// }


//passing change color function as callback

// setTimeout(changeColor("red"),  1000);
// setTimeout(changeColor("green"),2000);
// setTimeout(changeColor("blue"), 3000);



// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);
// But this is not right way to do it suppose if our frist color not change sy any condition then we don’t want to change the other color. But here the change color are not dependent on each other. 

// Suppose if we have any big task lets take an example of inserting data in the data base, if our frist data is not inserted in the database then we don’t want to insert the rest of the data so it is must important that our function are dependent on each other.


// so to get he dependency we can use a callback.

//make a function nextColorChange();


// function changeColor(color,delay, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         //we can use if condition to check our nextColorChange function return true.
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, ()=>{
//     changeColor("green", 1000, ()=>{
//         changeColor("blue",1000, ()=>{
//             changeColor("oreang", 1000)
//         });
//     });
// });


// promises in js 
// function savetoDb(data, sucess, failure) {
//     let newSpeed = Math.floor(Math.random() * 10) + 1;
//     if (newSpeed > 4) {
//         sucess();
//     } else {
//         failure();
//     }
// }

// savetoDb("data1",
//     () => {
//         console.log("sucess : data saved");
//         savetoDb("data2",
//             () => {
//                 console.log("sucess : data2 save");
//                 savetoDb("data3",
//                     () => {
//                         console.log("sucess : data3 save");
//                     },
//                     () => {
//                         console.log("failure : data3 ssaved");
//                     }
//                 )
//             },
//             () => {
//                 console.log("failure : data2 ssaved");
//             }
//         )
//     }, () => {
//         console.log("failure : data fail! not saved");
//     }); 



function savetoDb(data) {
    return new Promise((sucess, failure) => {
        let newSpeed = Math.floor(Math.random() * 10) + 1;
        if (newSpeed > 4) {
            sucess("sucess data saved");
        } else {
            failure("failure data not saved");
        }
    })
}

savetoDb("data1")
    .then((result) => {
        console.log("promise was resolved data1 saved", result);
        return savetoDb("data2");
    })
    .then((result) => {
        console.log("promise was resolved data2 saved", result);
        return savetoDb("data3");
    })
    .then((result) => {
        console.log("promise was resolved data3 saved", result);
    })
    .catch((error) => {
        console.log("promise was rejected", error);
    })


//color change code 

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve('color changed');
        },delay);
    });
}

changeColor('red',1000)
.then((result)=>{
    console.log("red color changed",result);
    return changeColor('green',1000);
})
.then((result)=>{
    console.log("green color changed", result);
    return changeColor('orange',1000);
})
.then((result)=>{
    console.log("orange color changed", result);
    return changeColor('blue',1000);
})
.then((result)=>{
    console.log("blur color changed",result);
})
.catch((error)=>{
    console.log("promise rejected color not changed",error);
});


