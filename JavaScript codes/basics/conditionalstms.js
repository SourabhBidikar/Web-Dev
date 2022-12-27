const { appendFile } = require("fs")

let a = prompt("Hey whats your age")
console.log(a)
console.log(typeof a)
a = parseInt(a)

console.log(a)
console.log(typeof a)

if (a > 30) {
  alert("Above 30 not allowed")
}
else if (a < 18) {
  alert("Below 18 not allowed")
}
else {
  alert("Allowed")
}

let fruit = "papaya"

switch (fruit) {
  case "banana": alert("Banana")
    break;
  case "papaya": alert("papaya")
    break;
  case "guava": alert("guava")
    break;
  default: alert("Invalid")
}