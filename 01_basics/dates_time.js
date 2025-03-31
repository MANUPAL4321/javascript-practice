//Dates

let myDate = new Date()
console.log(myDate);  //2025-03-30T10:34:02.985Z

// conversion for proper readable form
console.log(myDate.toString());      //Sun Mar 30 2025 10:35:17 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Sun Mar 30 2025
console.log(myDate.toLocaleString());   //3/30/2025, 10:36:46 AM
console.log(typeof myDate);  //object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);     //2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString());    //Mon Jan 23 2023

let myCreatedTimeAndDate = new Date(2025, 2, 30, 4, 12)
console.log(myCreatedTimeAndDate.toDateString());  //Sun Mar 30 2025
console.log(myCreatedTimeAndDate.toLocaleString());    //3/30/2025, 4:12:00 AM


// it calculate time till now in millisecond;
let myTimeStamp = Date.now()
console.log(myTimeStamp);                //1743331614843
console.log(myCreatedDate.getTime());    //1674432000000
console.log(Math.floor(Date.now()/1000)); //it change in millisecond to second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());     //2
console.log(newDate.getMonth()+1);   //3
console.log(newDate.getDay());      //0

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "narrow",   //S
    weekday: "long",     //Sunday
    weekday: "short"     //Sun
})) 

let d1 = new Date("2024-03-30");
let d2 = new Date("2024-04-05");
let diff = (d2-d1)/(1000*60*60*24);   //days difference
console.log(diff);