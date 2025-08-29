// Inside if condition written code is called local scope and outside code is called global scope

// var c = 300
let a = 300
if(true){
    let a =10
    const b = 20
    console.log("Inner is",a);
}

console.log(a);
// console.log(b);


