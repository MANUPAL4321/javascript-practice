let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);    //Inner: 10
}
// console.log(a);  //not defined
// console.log(b);  //not defined
// console.log(c);   // 30

// {}  (when we use curly braces then it will comes under scope)

function one(){
    const username = "manu"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()    //manu
}
// one()  //nothing print

if(true) {
    const username = "manu"
    if(username === "manu") {
        const website = "youtube"
        // console.log(username + website);     //manuyoutube
    }
    // console.log(website);  //not defined in that scope
}
// console.log(username);     //not defined in that scope


// ++++++++++++++++++++++++++++++++     interesting    +++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))    // this can easily print output 6

function addone(num) {
    return num + 1
}


// Hoisting concept
// addTwo(5)                // this will not give output addTwo can't access before initialization

const addTwo = function(num){
    return num + 2
}