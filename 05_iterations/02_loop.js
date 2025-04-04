// for of 

// ["", "", ""]
// [{}, {}, {}]  

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr){
//     console.log(num);
// }

// const greetings = "Hello world!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('UK', "United Kingdom")
// map.set('Fr', "France")

// console.log(map);        //Map(3) { 'IN' => 'India', 'UK' => 'United Kingdom', 'Fr' => 'France' }

// for(const key of map){
//     console.log(key);    //[ 'IN', 'India' ][ 'UK', 'United Kingdom' ][ 'Fr', 'France' ]
// }

// for(const key in map){
//     console.log(key);     //nothing will show
// }

// for(const [key, value] of map){
//     console.log(key, ':-', value);
// }
// const myObject = {
//     'game1': 'NFS',
//     'game2' : 'Spiderman'
// }

// for(const [key, value ] of myObject){
//     console.log(key, ':-', value);      //myObject is not iterable
// }

// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for(const key in myObject){
//     console.log(`${key} has ${myObject[key]} value`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(programming[key]);
// }

// for each loop

const coding = ["js", "ruby", "c++", "java", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
//js 0 [ 'js', 'ruby', 'c++', 'java', 'python' ]
// ruby 1 [ 'js', 'ruby', 'c++', 'java', 'python' ]
// c++ 2 [ 'js', 'ruby', 'c++', 'java', 'python' ]
// java 3 [ 'js', 'ruby', 'c++', 'java', 'python' ]
// python 4 [ 'js', 'ruby', 'c++', 'java', 'python' ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);    //javascript python
})