//console methods

console.log("Hello")
console.log(console) //logs all methods to the console.

//error
console.error("This is an error")

//assert is used to assert a condition
console.assert(5<33);

//clears the console
console.clear();


//table
obj={
    a:1,b:2,c:3
}
console.table(obj)  //shows key:value pairs in tabular form 

//warn
console.warn("Don't Drink")

//info
console.info("Information")  //to provide info


//time
console.time("forloop")

for(let i=0;i<5;i++)
{
    console.log(1)
}
console.timeEnd("forloop")

console.time("whileloop")

let j=0
while(j<5)
{
    console.log(1)
    j++;
}
console.timeEnd("whileloop")