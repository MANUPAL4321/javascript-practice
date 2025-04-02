// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// chai()  //DB CONNECTED

//simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('manu');

