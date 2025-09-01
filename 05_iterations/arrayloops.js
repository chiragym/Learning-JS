// for of , used for arr, strings

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);    
}

// for in 

const myobj = {
    js :"javascript",
    cpp : "C++"
}

for (const key in myobj) {
    // console.log(`${key} is Shortcut for ${myobj[key]}`);   
}

const Programming = ["JS","C++","React","java"]

for (const key in Programming) {
//    console.log(`Value is ${Programming[key]}`);
   
}

// for each

const excellence = [1,2,3,4,5,6,7,8,9,10]

// excellence.forEach(function (val) {
//     console.log(val);
// })

// const coding = ["react","java","C++"]
// coding.forEach( (val)=>{
//     console.log(val);
// } )

excellence.forEach( (val, index, arr)=>{
    // console.log(val, index, arr);
} )


// important
const newmehod = [
    {
        languagename : "JS",
        languagefilename :"js"
    },
    {
        languagename : "react",
        languagefilename :"rc"
    },
    {
        languagename : "Python",
        languagefilename :"py"
    }
]

newmehod.forEach( (val)=>{
    console.log(val.languagename);
    
} )
