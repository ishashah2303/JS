const myArr=[0,1,2,3,4,5]
// console.log(myArr[2])

const arr2=new Array(0,10,20,30,40)
// console.log(arr2[3])

myArr.push(6)
myArr.push(7)
// console.log(myArr)
myArr.pop()
// console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const a1=myArr.slice(1,3)
console.log(a1)
console.log("after slicing original array",myArr)

const a2=myArr.splice(1,3)
console.log(a2)
console.log("after splicing original array",myArr)