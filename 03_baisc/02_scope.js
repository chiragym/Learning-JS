// Inside if condition written code is called local scope and outside code is called global scope

// var c = 300
// let a = 300
// if(true){
//     let a =10
//     const b = 20
//     console.log("Inner is",a);
// }

// console.log(a);
// console.log(b);

//Nested function in this child function can access parent function values
function one(){
    const username  = "chirag"

    function two(){
        const email = "Youtube"
        console.log(username); 
    }
    // console.log(email)
    two()
}
// one()

//Hoisting
    // if you make one function with simple method you can acces it before initialization but 
    // if you store funcion in var than you can't access it before initialization
console.log(addone(5)); 
function addone(num){
    return num +1
}


addtwo(5) // Cannot access 'addtwo' before initialization
const addtwo = function add(val){
    return val + 2
}