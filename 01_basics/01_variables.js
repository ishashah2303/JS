const accountId = 144553
let accountEmail = "isha23@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId=5  Constant values cannot be changed
accountEmail="hchc@gmail.com"
accountPassword="qwertyuiop"
accountCity="Bangalore"

// dont use 'var' for variable assigning as theres an issue of scope defining. use 'let'

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])