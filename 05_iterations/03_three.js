const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);
// })
// console.log(values);//forEach never give value or return value

const myNums = [1,2,3,4,5,6,7,8]

// console.log(myNums.filter((num)=> num>4));

// console.log(myNums.filter((num)=> {num>4}));   //never give output because it is in curly braces in which use return keyword

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

//userBooks = books.filter( (bk) => bk.genre === 'History)

//userBooks = books.filter( (bk) => { 
// return bk.publish >= 2000 && bk.genre == 'History'
//  })

// console.log(myNums.map((add) => add+5));

// const newNums = myNums
//         .map((num) => num*10 )
//         .map((num) => num +1)
//         .filter((num) => num>=40)

// console.log(newNums)

//reduce method (for marketing rating, shopping cart)

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1199
    },
    {
        itemName: "python course",
        price: 299
    },
    {
        itemName: "cpp course",
        price: 3999
    },
]

const priceTopay = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(priceTopay);