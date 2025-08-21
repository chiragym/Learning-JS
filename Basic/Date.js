// let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

//-------- Date declaration ----------------

    // in js month strats from 0

// let myNewDate = new Date(2025,7,21)
// let myNDate = new Date(2025,7,21,11,0)
// console.log(myNewDate.toDateString());
// console.log(myNDate.toLocaleString());

 let date = new Date("08-21-2025")
// console.log(date.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(date.getTime());
// console.log(Math.floor(Date.now()/1000)); 

let newD = new Date()
// console.log(newD);
// console.log(newD.getDay());

newD.toLocaleDateString('default',{
    weekday:"long"
})







