//  this 
const userdetail = {
    username:"Chirag",
    price:1000,

    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to website`);
        
    } 
}
// userdetail.welcomeMessage()
// userdetail.username = "ram"
// userdetail.welcomeMessage()
console.log(this);

// when you run console.log(this) in normal function it returns many defaut values in terminal, but in arrow function it returns {}

// arrow function
    // method 1 
        // const add =(num1,num2)=>{
        //     return num1 + num2
        // }
        
        // method 2 , implicit return 
        //  const add =(num1,num2)=> num1 + num2
        
        // method 3
        //  const add =(num1,num2)=> (num1 + num2)
        
        // console.log(add(5,4));



