function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("U");
}

// sayMyName()   M A N U

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(10, 24)    //34
// addTwoNumbers(10, "4");     //104
// addTwoNumbers("12",  3)       //123
// addTwoNumbers("1", "2");        //12

function addTwoNumbers(number1, number2){
    let result = number1+number2
    // console.log("Manu");
    return result
    // console.log("Manu");  if i want to print below return then it will not print so we write this upper return
}

// const result = addTwoNumbers(3,5)
// console.log("Result: ", result);        //Result:  8

function loginUserMessage(username){    // any parameter is not passed then directly write username = "Manu"
    if(username === undefined){
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Manu"));    //Manu just logged in
// console.log(loginUserMessage());             //undefined just logged in

// // function calculateCartPrice(num1){
// //     return num1
// // }

// console.log(calculateCartPrice(2));                //2 
// console.log(calculateCartPrice(200, 300, 400))     //200

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(2));                //[2] 
// console.log(calculateCartPrice(200, 300, 400))     //[200, 300, 400]

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2));                //2 
// console.log(calculateCartPrice(200, 300, 400, 500))     //[400, 500]

const user = {
    username: "manu",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)   // Username is manu and price is 200

handleObject({
    username: "manu",
    price: 3000
})       //Username is manu and price is 3000

const myNewArray = [200, 300, 4000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))   //300


console.log(returnSecondValue([200, 4000, 500]));   //4000