//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sameer"
tinderUser.isLoggedIn=false

console.log(tinderUser)

const regularUser={
    email : "soe@gmail.com",
    fullname : {
        userfullname:{
            firstname: "Isha",
            lastname: "Shah"
        }

    }
}
console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = Object.assign({},obj1,obj2) 
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const user = [
    {
    id : 1 , 
    email : "h@gmail.com"
    },
    {
        id : 1 , 
        email : "h@gmail.com"
    },
    {
    id : 1 , 
    email : "h@gmail.com"
    },
        
]
// console.log(user[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename: "javascript",
    price : "999",
    courseInstructor : "Hitesh"
}
const {courseInstructor : instructor} = course
console.log(instructor)