let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate)

// console.log(typeof(myDate))

// let myCreatedDate=new Date(2023,0,22)
// let myCreatedDate=new Date(2023,0,22,5,3)
let myCreatedDate=new Date("12-15-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

let newDate=new Date()
console.log(newDate.toString())
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

//for customizing
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate)