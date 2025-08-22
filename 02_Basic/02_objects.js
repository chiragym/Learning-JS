//singleton
// Object.create()

//object litrals 

//symbol 
const mysym= Symbol("key1")

const user = {
    name:"Chirag",
    age:16,
    "fullname":"xyz",
    [mysym]:"mykey1",
    location:"Ahmedabad",
    isLoggedIn:false,
    lastLogindays:["mon","tue","thu"]
}

// access of objects , two ways 
//  console.log(user.name);
//  console.log(user["fullname"]);
//  console.log(user[mysym]);

 // to change something in object
// user.age = 17
// console.log(user);

// after freeze you cant change anything in object 
// Object.freeze(user)
// user.isLoggedIn= true
// console.log(user);

 
 user.greeting = function(){
    console.log("Hello Chirag");
 }
 console.log(user.greeting());

  user.greetingtwo = function(){
    console.log(`Hello user, ${this.name}`);
 }
 console.log(user.greetingtwo())