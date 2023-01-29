let marks = [80, 76, "not present", null, false]

console.log(marks)

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5]) ///undefined as no element at 5

marks[5]=91            //adding new ele at 5
console.log(marks[5]) 

marks[0]=99            //changing val of existing
console.log(marks)