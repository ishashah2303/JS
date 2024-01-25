const mySym = Symbol("key1")


const JsUser={
    name:"Isha",
    "full name" : "ISHA SHAH",
    [mySym] : "mykey1",
    age : 20,
    location: "Mumbai",
    email: "isha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof(JsUser[mySym]))

JsUser.email = "ishashah23@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ishashah23@microsoft.com"
//console.log(JsUser) 

JsUser.greeting=function(){
    console.log(`Hello User ${this.name}`)
}
console.log(JsUser.greeting())