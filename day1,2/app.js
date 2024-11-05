// console.log("helllo world");
// console.log("ashesh gupta"); 
// let a = 10;
// let b = 10;
// console.log("sum is : ",a+b);

// let pencil = 10;
// let ereaser = 20;
// // let output = console.log("The total price is : " + ( pencil + ereaser) + "Rupee. ");

// //USE OF TEMPLATE LITTERALS
// let output = `the total is ${pencil + ereaser} Ruppes`; 
// console.log(output);


//==================OPERATORS IN JAVA SCRIPT =======================
    // same as previous operators 
    // some special operators are 
    // >> === it compare value as well as tyoe
    
    // comprasion for non numbers
    // unicode value for small leters a = 61 b = 62 and A = 41 B = 42
    //  == 'a' > 'A' gives true 
    //  == 'a' > 'b' gives false 
    //  == 'b' > 'c' gives true 
    //  == 'B' > 'C' gives true
    //  == '*' > '&' gives false 

    // conditional statements
    // ==>> ifELse   ==> nested ifElse  ==> switch

    // if statements
    // console.log("before");
    // let age  = 18;
    // if(age >= 18 ){
    //     console.log(`elliglible voter ${age}`);
    // } 
    // console.log("after");
    // let name = "ashesh"
    // if(name  == "ashesh"){
    //     console.log(`yae you are a ${name}`);
    // }


    // traffic light    ===== here we are using else if ststyment
    // let color = "greed";
    // if(color == "red"){
    //     console.log("stop");
    // }
    // else if(color == "green"){
    //     console.log("go");
    // }
    // else{
    //     console.log("wait");
    // }
    
    // calculate popcorn prices 
    // let size = "XL"

    // if(size == "XL"){
    //     console.log("rs 250");
    // }

    // else if(size == "L"){
    //     console.log("rs 200");
    // }

    // else if(size == "M"){
    //     console.log("rs 100");
    // }

    // else{
    //     console.log("rs 50");
    // }


    // nested if else statyment

    // let marks  = 33;
    // if(marks >= 33){
    //     if(marks >= 80){
    //         console.log("grade a");
    //     }else if(marks >= 60){
    //         console.log("grade b");
    //     }else{
    //         console.log("grade d");
    //     }
    // }else{
    //     console.log("fail");
    // }

    // print "good string" if  frist letter of a string is start with "a" ans it slength is greater thwan 3
    // let str = "fapple";
    // if(str[0] === 'a' && str.length >= 3){
    //     console.log("good  String");
    // }else{
    //     console.log("bad String")
    // }

       // TRUTHY AND FLASEY VALUE 
    //    falsey value is  ==>> (false, 0, -0, On(BigInt value), ""(empty string), null, underfined, NaN)

    // truthy value is  ==>> everything else all above falsey value.


    //SWITCH STATEMENT 
    // let color = "green";
    // switch (color) {
    //     case "red":
    //         console.log("stop the car")
    //         break;
    //     case "green":
    //         console.log("start the car and go");
    //         break;
    //     default:
    //         console.log("start the car and wait");
        
    // }

    // Alert and Prompet
        // ALERT display an alert message on the page like.
        // alert("something is wrong");

        // PROMPT display a dialog box that asks used for input.
        // let no = prompt("please enter your number");
        // console.log(no);

        // let fristName  = prompt("enter frist name")
        // let secondName  = prompt("enter last name")
        // let msg = `welcome ${fristName} ${secondName} !`;
        // alert(msg);
        // console.log(msg);


// =============================================================================== DAY 3 ================================================================================

        // == STRINGS METHODS

        // TRIM METHOD == trimes whitespaces from both ends of string ans return the new one.
        // let str  = "       ashesh             ";
        // let pass = prompt("enter ypur password");
        // let newpass = pass.trim();
        // console.log(pass);
        // console.log(newpass);

        // uppercase and lowercase method 

        // let name = "Ashesh Gupta"
        // let upper = name.toUpperCase();
        // console.log(upper);
        // let lower = name.toLowerCase();
        // console.log(lower);

         // string method with argument 
        //  Argument is some value that we pass to the method 

            // INDEXOF METHOD == return the frist  of occurence of some value in string.Or gives -1 if not found.
            // let str = "ashesh";
            // console.log(str.indexOf('hes'));

        // CHAINING OF METHODS  == using one method after another. Order of execution will be left to right.

        // let name  = "    ashesh      ";
        // console.log(name);
        // console.log(name.toUpperCase().trim());

        //string method with argument

        //formate => stringName.method(arg);

        // let str ="lLoveCoding";
        // console.log(str.indexOf("Love"));

        // method chaining 
        // let msg = "hello     ";
        // let mg = msg.trim().toUpperCase(); // using trin and uppercase in one line 
        // console.log(mg);

        // slice method 
        // let str = "ashesh gupta";
        // console.log(str.slice(5));
        // console.log(str.slice(0,6));
        // console.log(str.slice(-5));


        //replace method 
        //=> search the value in string and return a new string with the value replaced 

        // let str = "ilovecoding";
        // console.log(str);
        // console.log(str.replace("love","do"));
        // console.log(str.replace("ilovecoding","hello my name is ashesh "));

        //repeate method 
        // let str = "apple ";
        // console.log(str);
        // console.log(str.repeat(5));


        //-------------------------------ARRAYS -------------------------------

        // let students = ["ama","raja","jatin"]

        // let indo = ["sahesh", 21, 72, "bpositive"];// midex arrays
        // arrasy are mutable.
        // arrays methods 
        // 1)push = insert at the last of the array 2)pop = remove the last from the array 3)unshift = insert new in the start of the array 4)shift = remove the frist of the array


        // arrays method indexOf();
        // if we found the element ar arrays it returns the index else it return the value -1 

        // Concat method in the array 
        // it will merge the two arrays or concinate the  2 arrays 
        // let one = [1,2,3,4,5];
        // let two = [6,7,8,9];
        // console.log(one.concat(two));
        

        // revdrse method in the array
        // let arr = [1,2,3,4,5];
        // console.log(arr);
        // console.log(arr.reverse());   

        //array splice method
        // this is the method used to do (remove | replace | inset elemetn at the index) 
        
        // Arrasy sorts 
        // used  to sort the arays in acending and decending order
        // let arr = [1,3,2,4,7,4,8,9];

        //nested Arrays 
        // have multiple array in the one arrast
        // let arr = [[1,2],[3,4],[4,5]];
        // console.log(arr);




// =========================================== day 4 ========================================
// loops in Js.

// FOR LOOPS

//print all odd numbers
// for(let i =0; i<= 15;i=i+2){
//     console.log(i);
// }

// console.log("even number")

// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }

// let n = prompt("enter number");
// n = parseInt(n);
// for(let i=n;i<= n*10;i = i+n){
//     console.log(i); 
// }



//WHILE LOOPS 
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }





