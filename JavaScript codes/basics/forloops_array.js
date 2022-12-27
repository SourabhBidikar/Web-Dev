let num=[1,2,3,4,5]

//using normal for
console.log("using normal for")
for(let i=0;i<num.length;i++)
{
    console.log(num[i])
}

console.log("using  foreach()")
num.forEach((element)=>{
    console.log(element)
})

//sum of array elements
let sum=0;
num.forEach((element)=>{
    sum=sum+element;
})

console.log("sum of array elements: ",sum)


//Array.from method

let name="Harry"
console.log(name)
let nameArr= Array.from(name)
console.log(nameArr)


//for of method
for (let i of num){
    console.log(i)
}