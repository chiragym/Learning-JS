// for each doesn't retiurn any values

// filter -> returns values , it checks condition for true and false 

// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const numbers = mynums.filter( (val) => val > 5)
// console.log(numbers);

// map
//  const again = mynums.map( (val) => val+10 )
//  console.log(again);


// Chaining , in this you can use multiple array loops method
// const newnums = mynums
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
        // console.log(newnums);

        // Important topc 
// reduce 
const mynums = [1,2,3]
// const total = mynums.reduce( function (acc,curval) {
//     return acc + curval
// },0)
// console.log(total);

// const newTotal = mynums.reduce( (acc,crr) => acc+crr,0)
// console.log(newTotal);

const ShoppingCart = [
    {
        itemname:"Js course",
        price: 2999
    },
    {
        itemname:"python course",
        price: 999
    },
    {
        itemname:"React course",
        price: 5999
    },
]

const pricetopay = ShoppingCart.reduce( (acc,item) => (acc + item.price) ,0)
console.log(pricetopay);




        

