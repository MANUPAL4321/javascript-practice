// singleton  (any thing we make frome constructor then singleton)

//object.create

//object literals

//now we will read object litterals


const mySym = Symbol("key1")

const JsUser = {
    name: "Manu",
    "full name": "manu kumar",     //for print this i can use JsUser.full name(it will show error), so use JsUser."full name" 
    age: 18,
    [mySym]: "mykey1",
    location: "Bihar",
    email: "manu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)    //"manu@google.com"
// // console.log(JsUser[email])   //email is not defined
// console.log(JsUser["email"])  //"manu@google.com"
// console.log(JsUser.mySym)     //myKey1 and type will be in string  if mySym will not in squarebracket
// console.log(typeof JsUser.mySym)    //String  if mySym will not in squarebracket
// console.log(JsUser[mySym])    //myKey


// JsUser.email = "manu@googlechrome.com"
// object.freeze(JsUser)
// JsUser.email = "manu@chatgpt.com"
// console.log(JsUser);  //here email will be not change because before print freeze this then mail will be "manu@googlechrome.com"

JsUser.greeting = function(){
    console.log("hello JS user");   //hello JS user
}
console.log(JsUser.greeting);   //[Function (anonymous)]  here function is not execute only came reference of function
console.log(JsUser.greeting());   //undefined
// myArray = ["M", "n"]

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); 
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());