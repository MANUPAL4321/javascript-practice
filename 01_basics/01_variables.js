const accountId  = 123456
let accountEmail = "manu@gmail.com"
var accountPassword = "1234"
accountCity = "Bihar"
let accountState;

// accountId = 5   //not allowed
accountEmail = "manu12@gmail.com"
accountPassword = "23456"
accountCity = "Uttar pradesh"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
