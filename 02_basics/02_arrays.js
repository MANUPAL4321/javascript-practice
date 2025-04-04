const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)       //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);      //batman

// const allHeros = marvel_heros.concat(dc_heros)     //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  //it is better to add or merge two arrays within a single array
// console.log(all_new_heros);

const another_array = [1, 2 ,3, [4,5,6], 7, [6,7,[5,3]]]
const real_another_array = another_array.flat(Infinity)   //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array)   //[1, 2, 3, 4, 5, 6, 7, 6, 7, 5, 3]

console.log(Array.isArray("Manu"))   //false
console.log(Array.from("Manu"))       //['M', 'a', 'n', 'u']

console.log(Array.from({name: "hitesh"})) //[]  because it is unable to understand we change key or value in Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    //[ 100, 200, 300 ]
