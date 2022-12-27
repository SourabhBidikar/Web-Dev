let num=[45,61,74]
let sum=0;
let a=num.forEach((value) => {
    return value+1;
    
});

console.log(a) //will be undefined as foreach does not return a changed array
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let arr1=[33,67,86]

let b=arr1.map((value)=>{
  
    return value+1;

})

console.log(arr1) //will print original array->[ 33, 67, 86 ]
console.log(b) //will print returned new array  ->[ 34, 68, 87 ]

//also we can give all three arguments like
let b1=arr1.map((value,index,arr1)=>{
    console.log(value,index,arr1)

})

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//array filter method
const arr2=[773,3,22,17,43]

let filteredArr= arr2.filter((value)=>{
    return value<25;
})

console.log("Filtered Array: "+filteredArr)

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// array reduce method

const arr3=[1,2,4,3,4,5,8]

let reducedArr=arr3.reduce((h1,h2)=>{
        return h1+h2;
})

console.log(reducedArr)
console.log(arr3)