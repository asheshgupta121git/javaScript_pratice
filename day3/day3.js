// ============== Strings methods =====================

// formate = stringName.method()


//------------------------>>>>trim method 
// let str = "     apnacollege        ";
// // console.log(str);
// let st = str.trim();
// // console.log(str);

// let pass  = prompt("set password");
// console.log(pass.trim());


//---------------------->>>>>toUpperCase() or toLowerCase() methods
//  let name = "Ashesh Gupta";

//  console.log(name);
//  console.log(name.toLowerCase());


//  let second  = "Ashutosh";
//  console.log(second);
//  console.log(second.toUpperCase());

//---------------------------->>string methoda with arguments

// fromate  = stringName.method(arg1, arg2, arg3, ...)

    // indexOf() method => it return the frist index of the specified value in a string.

    // let msg = "ilovecoding"; 
    // console.log(msg.indexOf("love"));
    // console.log(msg.indexOf("zed"));
    // console.log(msg.indexOf("o"));

// --------------->> mehtod chaining

// let str = "              ASHESH GUPTA      ";

// console.log("before method: ", str);
// console.log("after trim", str.trim());
// console.log("after toUpperCase", str.trim().toUpperCase());


// let msg  = "       hima         ";
// console.log("before method: ", msg);
// console.log("using method chaining of mthod trim and uppercase ", msg.trim().toUpperCase());


// -------------------------->> silce methods .

//  let str = "iloveCoding";
//  console.log(str.slice(5));
//  console.log(str.slice(4, 5));
//  console.log(str.sl ce(-6));  //11-6 = 5


 //----------->>replace method .

    // let str ="ashesh";
    // console.log(str);
    // console.log("replacing 'esh' with 'gpt' in ashesh", str.replace("esh","gpt"));

// --------repeat method .
// let str = "hello ";
// console.log(str.repeat(5));


// ---------------------------- ARRAYS IN JAVASCRIPT ----------------------

// let stud = ["ashesh", "ashutosh", "amit", "aditya"]; // string array
// let num = [1, 2, 3, 4, 5]; // number array
// let info = [1, "ashesh", true]; // mixed array
// let newArr = []; // empty array


// arrays are mutable;



// ----------- arrays methods 

// 1   push = add to end of array
// 2   pop = remove from end of array
// 3   unshift = add to start of array
// 4   shift = remove from start of array

// let info  = ["bmw", "audi", "mercedes"];

// console.log("before push", info);

// info.push("volvo"); 

// console.log("after push", info);    

// console.log("before pop", info);

// info.pop();

// console.log("after pop", info);

// console.log("before unshift", info);

// info.unshift("honda");

// console.log("after unshift", info);

// console.log("before shift", info);

// info.shift();   

// console.log("after shift", info);


// ------------------------>> arrays methos includes and indexof 
// let car = ["bmw", "audi", "mercedes", "benz", "volvo"];
// console.log(car.indexOf("benz"));
// console.log(car.indexOf("ford"));
// console.log(car.includes("benz"));
// console.log(car.includes("ford"));

// ------------->> concat method in array .
// let primary = ["mango", "apple", "guava", "orange"];
// console.log(primary);

// let secondary = ["onion", "potato", "garlic","tomato"];
// console.log(secondary);

// console.log("after concatination ", primary.concat(secondary))
// console.log("after concatination ", secondary.concat(primary))

// ---------------->> reverse method .

// let rev = [ "car", "bus", "train"];
// console.log(rev);
// console.log("after reversing ", rev.reverse());

//---------------->> slice method .
// let color = ["red", "blue", "green", "yellow", "orange"];

// console.log("before slice", color);

// console.log("after slice", color.slice(2, 4));


// ------------------------>> splice method .
// let col = ["red", "blue", "green", "yellow", "orange"];
// console.log("before splice", col);
// col.splice(1,0,"purple"); //insert purple at index 1
// console.log("after splice", col);

// col.splice(1,1,"pink"); //replace green at index 1 with pink
// console.log("after splice", col);

// Arrays method sort 
// it sorts an array in acending and descending order.

// let cars = ["bmw", "audi", "mercedes", "benz", "volvo"];

// console.log("before sort", cars);

// cars.sort();

// console.log("after sort", cars);

// let num = [10, 5, 8, 2, 7];

// console.log("before sort", num);

// num.sort();

// console.log("after sort", num);


//------------------------------>>  constant arrays .

// const arr = [1, 2, 3, 4, 5];
// error: can't push to a constant array or any other array methods in the const array .
// it is used to prevent accidental changes to the array.

//---------------------------------->> nested arrays .

// let nums  = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // this is nested array.
// console.log(nums);
// console.log(nums[0]); // accessing first sub array

