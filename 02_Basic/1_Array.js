// const myArr = [1,2,3,4,5]
// console.log(myArr[0]); 

// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);
// console.log(myArr.length);
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(4));

// const arr = myArr.join()
// console.log(arr);
// console.log(typeof arr);

// ------------------- Arr part 2 ---------------------------

const marvel_heros = ["thor","loki","hulk"]
const dc_heros = ["superman","batman","flash"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros);   or use 

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);      or use 

const newheros=[...marvel_heros,...dc_heros]
// console.log(newheros);

const real = [1,2,3,[5,6],7,8,[9,10,[11,12]],13,14,15]
const real_demo= real.flat(Infinity) // can give depth like 1,2,3, instead of infinity
// console.log(real_demo);

console.log(Array.isArray("Chirag"));

console.log(Array.from("Chirag"));

console.log(Array.from({name:"Chirag"})); // interesting for interviews

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));










