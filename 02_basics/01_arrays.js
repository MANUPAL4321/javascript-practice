// array

const myArr = [0, 1, 6, 3, 4]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr[2]);        //6
console.log(myHeros[0])         //shaktiman

//Array methods

// myArr.push(6)
// myArr.push(7)     //[0, 1, 6, 3,4, 6, 7]
// myArr.pop()         //[0,1,6,3,4,6]

// myArr.unshift(9)        //[ 9, 0, 1, 6, 3, 4 ] add element at 0 index and all shift
// myArr.shift()               //[0,1,6,3,4]  remove first element and all element shift
// console.log(myArr.includes(3));   //true
// console.log(myArr.indexOf(6));      //1
// const newArr = myArr.join()    //change in string with comma seperated
// console.log(newArr);            // 0,1,6,3,4
// console.log(myArr); 

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)    //A  [ 0, 1, 6, 3, 4 ]

console.log(myn1);                //[1,6]
console.log("B ", myArr);          //[0,1,6,3,4]

const myn2 = myArr.splice(1,3);
console.log("c ", myArr);          //c [0,4]
console.log(myn2);                  //[1,6,3] 