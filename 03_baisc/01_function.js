function addtwonum(number1 , number2){
    // console.log(number1 + number2);
    return number1 + number2
}
 const result = addtwonum(5,6)
//  console.log("Result is:",result);

// rag is default value of function 
// function loginusermessage(username = "rag"){
//     if(username === undefined){
//         console.log("Please enter username");
//         return
//     }
//         return `${username} just logged in`
// }
// console.log(loginusermessage("Chirag"));
// console.log(loginusermessage()); // returns undefined 

// rest operator in finction
function calculatecartpprice(...num){
    return num
}
// console.log(calculatecartpprice(100,200,300,4000));

// const user = {
//     username :"Chirag",
//     price:100
// }

function callobject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);       
}
callobject({
    username :"Chirag",
    price:100
})


const myNewarr = [10,20,30,40]
function returnsecondevalue(getarr){
    return getarr[1]
}
console.log(returnsecondevalue(myNewarr));