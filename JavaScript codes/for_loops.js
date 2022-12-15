/*//program to add n natural numbers
let n = prompt(" enter n:")
n = Number.parseInt(n)
//print all n numbers
for (let i = 1; i <= n; i++) {
  console.log(i)
}


let sum = 0
//sum all n numbers
for (let i = 1; i <= n; i++) {
  sum = sum + i
}
console.log("sum="+ sum)
*/


//for in loop

let result = {
    "Sourabh": 70,
    "Appu": 76
  }
  
  for (let a in result) {
    console.log("marks of " + a + "are: " + result[a])
  }
  
  
  //for of loop
  //note above obj cannot be used as it is not iterable
  for (let a of "harry") {
    console.log(a)
  }