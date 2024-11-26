// DOM events => events are signals that something has occured (user inputs / actions);
 

// inline events

// onclick events (when an element is clicked )
// onmouseenter events (when an mouse enters an element)
// let btn = document.querySelectorAll("button");

// btn.onclick = function (){
//     console.log("button clicked");
//     alert('clicked')
// }



// function say(){
//     alert('say hello');
// };
// btn.onclick = say;
// for(btns of btn){
//     btns.onclick = say;
//     console.dir(btns);
//     btns.onmouseenter = function(){
//         console.log("mouse entered");
//     }
// }



// ----> events Listener 

//addevent listener.

// function sayname(){
//     alert('say name');
// };

// function sayhello(){
//     alert('say hello');
// };

// for( btns of btn){
//     // btns.onclick = sayhello;
//     // btns.onclick = sayname;
//     // btns.addEventListener("click", sayhello);
//     // btns.addEventListener("click", sayname);
//     btns.addEventListener("dblclick", function(){
//         console.log("double clicked");
//     });

// }


// activity
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let color = changeColor();
//     let h3 = document.querySelector("h3");
//     h3.innerText = color;    
//     let div = document.querySelector("div");
//     div.style.backgroundColor = color;   
//     console.log("changed color");
// })
// function changeColor(){
//     let red = Math.floor(Math.random() *255);
//     let green = Math.floor(Math.random() *255);
//     let blue = Math.floor(Math.random() *255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

//----------->> EventsListener for paragraph

// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("paragraph was clicked");
// })

// let box = document.querySelector("div");

// box.addEventListener("mouseenter", function(){
//     console.log("box hover printed")
// })


//---------->> This in Event Listeners.

// when 'this' is used in a callback of enevt handeler of sometn=hing, it refers to that something.

let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this);
//     this.style.color = "red";
//     this.style.backgroundColor = "green";
// })

// let p = document.querySelector("p");
// let h3 = document.querySelector("h3");
// let h1 = document.querySelector("h1");

// function changeColor(){
//     console.log(this);
//     this.style.color = "red";
//     this.style.backgroundColor = "green";
// };

// p.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);


//------------->> keyboards events.
// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let input = document.querySelector("input");

// input.addEventListener("keyup", function(event){
//     console.log(event);
//     console.log("key is = ",event.key);
//     console.log("code is = ",event.code);
//     console.log("key-code is = ",event.keyCode);
//     console.log("key pressed");
// });


// input.addEventListener("keyup", function(event){
//     console.log("code = ", event.code);
//     if(event.code == "ArrowUp"){
//         console.log("charactor moves upward");
//     }
//     if(event.code == "ArrowDown"){
//         console.log("charactor moves downward");
//     }
//     if(event.code == "ArrowLeft"){
//         console.log("charactor moves leftward");
//     }
//     if(event.code == "ArrowRight"){
//         console.log("charactor moves rightward");
//     }

// });


//---------------->> Forms events and extracting form data.

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event){
    // event.preventDefault(); // prevent the default form submission action.
    // console.log("form submit");

    // let inp = document.querySelector("#user");
    // console.log(inp.value);
    // let pass = document.querySelector("#pass");
    // console.log(pass.value);
    // alert(`hi ${inp.value} your password is ${pass.value}`)
// })


// let user = document.querySelector("#user");
// user.addEventListener("change", function(){
//     console.log("input change");
//     console.log("final value  = ", this.value);
// })

// text editor activity

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    console.log("input.value = ", this.value);
    p.innerText = this.value;
});