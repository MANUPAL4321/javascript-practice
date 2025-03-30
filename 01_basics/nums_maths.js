const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);    //[Number:100]

// console.log(balance.toString())    //100 it is in string but not showing if i will check type then show string.
// console.log(balance.toString().length);  //3
// console.log(balance.toFixed(2));    //100.00

const otherNumber = 123.8966
//23.9 if otherNumber will be 23.8966 and toPrecision will be 3.
//124 if otherNumber will be 123.8966 and toPrecision will be 3.
// console.log(otherNumber.toPrecision(2));  //1.2e+2

const hundred = 1000000
// console.log(hundred.toLocaleString()); //1,000,000 in us count
// console.log(hundred.toLocaleString('en-IN')); //change in indian count 10,00,000


// +++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(4));       //4
// console.log(Math.round(4.6));   //5
// console.log(Math.ceil(4.2));    //5
// console.log(Math.floor(4.2));   //4
// console.log(Math.min(4,3,6,7)); //3
// console.log(Math.max(5,2,8,9)); //9

console.log(Math.random());
console.log((Math.random()*10) +1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)) + min);