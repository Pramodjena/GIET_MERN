const accountId = 144553
let accountEmail = "pramod@google.com"
var accountPassword = "12345"
accountCity = "Cuttack"
let accountState;

// accountId = 2 // not allowed


accountEmail = "pramod@giet.com"
accountPassword = "21212121"
accountCity = "Bhubaneswar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])