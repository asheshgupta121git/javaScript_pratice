// let todo = [];

// let req = prompt("pls enter your choice");

// while (true) {
//     if(req == "quit"){
//         console.log("quit app");
//         break;
//     }

//     if(req == "list"){
//         console.log("-------------------");
//        for(let i =0; i<todo.length;i++){
//         console.log(i , todo[i]);
//        }
//         console.log("-------------------");
//     }else if(req == "add"){
//         let task = prompt("Enter task you want to add");
//         todo.push(task);
//         console.log("task added")
//     }else if(req == "delete"){
//         let idx = prompt("Enter index of task you want to delete");
//         todo.splice(idx,1);
//         console.log("task deleted");

//     }else {
//         console.log("Invalid input. pls enter valid option");
//     }

//     req = prompt("pls enter your next req");
// }

let todo = [];

let req = prompt("pls enter your choice");

while (true) {
    if(req == "quit"){
        console.log("quited app");
        break;
    }

    if(req == "list"){
        console.log("-------------------");
        for(let i =0; i<todo.length;i++){
            console.log(i+1, todo[i]);
        }
        console.log("-------------------");
    }else if(req == "add"){
        let task = prompt("Enter task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Enter index of task you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("Invalid input. pls enter valid option");
    }

    req = prompt("pls enter your next req");

}