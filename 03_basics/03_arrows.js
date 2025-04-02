const user = {
    username: "manu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); 
        console.log(this);       //if i call function like user.welcomeMessage()  then output will be {username:'manu', price:999, welcomeMessage: [Function: welcomeMessage]}
    }
}

//"this"  refer to current context

// user.welcomeMessage()    //manu, welcome to website

// user.username = "sahil"
// user.welcomeMessage()    //sahil, welcome to website

// console.log(this);       //here will be empty object

//more global object in browser is window object

// function chai(){
//     let username = "manu"
//     console.log(this.username);    //undefined because inside function i can not use like this
// }
// chai()

// const chai = function () {
//     let username = "manu"
//     console.log(this.username);    //undefined
// }

// chai()

// const chai = () => {
//     let username = "manu"
//     console.log(this);              //{}
// }
// chai()  

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,6))    //8

// when we use curly braces then use return otherwise when use paranthesis then not need to use return

// const addTwo = (num1, num2) => num1+num2
// both upper and lower code will be same output
// const addTwo = (num1, num2) => (num1+num2)
// console.log(addTwo(4,3));

//when i want to return object then here is necessary parenthesis 
// const addTwo = (num1, num2) => {username: "manu"}    //undefined here need to used parenthesis
// const addTwo = (num1, num2) => ({username: "manu"})     //{username: 'manu'}
// console.log(addTwo(4,5)) 

// const myArray = [2,4,5,7,8]
// myArray.forEach()

