//----->>> DOM (document object model)

//---> get elemet by id'

// document.getElementById("mainImg")

// //---> get element by class name

// let cl = document.getElementsByClassName("oldImg");

// for (let i = 0; i < cl.length; i++) {
//     cl[i].src = "assets/spidrman.jpg";
//     console.log(`value is changed ${i}`);
// }

//------->> Query selectors
// let a = document.querySelector('p'); // select frist p element
// console.log(a);
// let b = document.querySelector('#mainImg');// select frsit element with id = mainImg
// console.log(b);
// let c = document.querySelector('.oldImg');// select frist elemet with class = oldImg
// console.log(c);
// let d = document.querySelectorAll("p"); // select all p elements.
// console.log(d);

// console.dir(document.querySelectorAll('div a'));



//--------selecting the content in object-
// let para = document.querySelector('p');
// console.log(para)

// // console.dir(para);

// console.log(para.innerHTML);
// console.log(para.innerText);
// console.log(para.textContent);


//------->> manipulating attribute.
// let img = document.querySelectorAll('img');

// let a = img[3].getAttribute('src');
// img[0].setAttribute('src',a);


//-->> manupulating style .

// style proprety ====== :) Obj.style;

// let link = document.querySelectorAll('.box a');
// for(l of link){
//     l.style.color = "maroon";
// }

// for (let i = 0; i < link.length; i++) {
//     link[i].style.color = "maroon";
// }    

// let h = document.querySelector("h1");

// h.classList.add("green");
// h.classList.add("underline");

// h.classList.remove("green");

// console.log(h.classList.contains("underline")); // gives true

// h.classList.toggle("green"); // it is used to on and off or add or remove .


//-------->> Navigation .

// let box = document.querySelector(".box");
// console.log(box.children);
// console.log(box.parentElement);
// console.log(box.previousElementSibling);
// console.log(box.nextElementSibling);


//------>>> adding element.
// let newp = document.createElement('p');
// newp.innerText = "hi ashesh gupta";
// let body = document.querySelector('body');

// body.appendChild(newp);
// let box = document.querySelector('.box');
// box.appendChild(newp);



// let btn = document.createElement('button');
// btn.innerText = "click me";
// box.appendChild(btn);

// // --------->> append add in last .
// newp.append(" this is new p");
// newp.append(btn);
// newp.append(" dont click me ");

//------>> perpend add in frist 

// ----->> insert adjucemt define where we want to add at what position. 

// let p = document.querySelector('p');
// btn.innerHTML = "click me !!!";

// p.insertAdjacentElement('beforebegin', btn); // before start of the para

// p.insertAdjacentElement('afterbegin', btn); // in the start of the para

// p.insertAdjacentElement('beforeend', btn); // in the end of the para

// p.insertAdjacentElement('afterend', btn); // after the end of the para


//--------------------->>>> removing element form the page.

// let body = document.querySelector('body');
// body.removeChild(btn);
// btn.removeAttribute();



// ---------------------->> pratice question 

// let para = document.createElement('p');

// para.innerHTML = "hey im red";
// para.style.color = "red";

// let body = document.querySelector('body').appendChild(para);




// let h3 = document.createElement('h3');
// h3.innerText = "I,m a blue h3";

// h3.style.color = "blue";
// body.appendChild(h3);

// let div = document.createElement('div');
// div.classList.add('divborder');

// let h1 = document.createElement('h1');
// h1.innerText = "I,m a green h1";
// h1.style.color = 'green';
// let para2 = document.createElement('para2');

// para2.innerHTML = "I,m a green para2";
// para2.style.color = 'green';

// body.appendChild(div);

// div.appendChild(h1);
// div.appendChild(para2);
