let marks = [99, 57, 80, 57]

console.log(marks)
console.log(marks.length)

//toString method
let b = marks.toString()  //convert array to string
console.log(b, typeof b)

let c = marks.join(" and ") //joins and returns string
console.log(c, typeof c)


//pop method
let p = marks.pop()
console.log(marks)
console.log(p)

//push
marks.push(78)
console.log(marks)

marks.shift()
console.log(marks)

marks.unshift(1)
console.log(marks)

delete marks[2]
console.log(marks)
