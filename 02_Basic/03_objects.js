// const tinderuser = new Object() // this is singleton object 

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Chirag"
// tinderUser.isLoggedin = false
// console.log(tinderUser); 

// we can use Object.keys and Object.values to find keys and values for any object like
//  console.table([Object.keys(tinderUser),Object.values(tinderUser)]);


// const userDetails = {
//     email:"harsha.ky@gmail.com",
//     fullname:{
//         username:{
//             firstname:"Chirag",
//             lastname:"Yadav"
//         }
//     }
// }
// console.log(userDetails.fullname.username);

// const obj1 ={ 1:"a", 2:"b"}
// const obj2 ={ 3:"c", 4:"d"}
// const obj3 ={...obj1,...obj2} or use
// const obj3 =Object.assign({},obj1,obj2)
// console.log(obj3);

// Destructuring 
const course ={
    name:"React-course",
    Price:"1000",
    Instructor:"Ekta and Kenvi Ma'am"
}
// when we dont want to write object.name many times in console we use below method and 
// const{Instructor} = course
// console.log(Instructor);

//we can make name smalle also 
// const{Instructor:teach} = course
// console.log(teach);
