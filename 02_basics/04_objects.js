// singleton

// const tinderUser = new Object()    //{}
const tinderUser = {}             //{}

// console.log(tinderUser);
tinderUser.id = "123abc"
tinderUser.name = "Manu"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "manu",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser)     //{email: 'some@gmail.com',fullname: { userfullname: { firstname: 'manu', lastname: 'kumar' } }}
// console.log(regularUser.fullname)    //{ userfullname: { firstname: 'manu', lastname: 'kumar' } }
// console.log(regularUser.fullname.userfullname);    //{ firstname: 'manu', lastname: 'kumar' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
// const obj3 = Object.assign(obj1, obj2)    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2)    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// here we take empty parenthesis for save in empty parenthesis (involve obj1 and obj2 ) otherwise it will save in obj1
const obj3 = {...obj1, ...obj2}     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "google@email.com"
    }
]

// console.log(users[0].email);              //google@email.com
// console.log(tinderUser);                  //{ id: '123abc', name: 'Manu', isLoggedIn: false }
// console.log(Object.keys(tinderUser));     //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));   //[ '123abc', 'Manu', false ]
// console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'Manu' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //true

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "manu"
}

// course.courseInstructor
// const {courseInstructor} = course    //manu


//Destructuring
const {courseInstructor: instructor} = course   // it is replace name instructor at the place of courseInstructor
console.log(instructor);

// {
//     "name": "manu",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]