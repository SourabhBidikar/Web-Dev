
let arr1=[1,2,3,4,5,6,7,8];

let res=arr1.filter((a)=>{
    if(a%2==0)
    return a;
})

let sum=arr1.reduce((a,b)=>a+b)


console.log(arr1)
console.log(res)
console.log(sum)

let arr2=[1,2,3,4,5,6,7,8];

arr2.splice(1,2,99,99)

console.log(arr2)

let arr3=[1,2,3,4,5,6,7,8];

let slicedarr=arr3.slice(2,5)

console.log(arr3)
console.log(slicedarr)


let str1="aba"
// let arr4=str1.split("");
// console.log(arr4)
// arr4.reverse();
// revstr=arr4.join("");
let revstr= str1.split('').reverse().join('')
if(str1==revstr){
    console.log('string is pal')
}


// arr=['apple','zasfgh','mango','mango','mango','orange']


const sortUnique=(arr)=>{
    let resarr= [... new Set(arr)]
    resarr.sort((a,b)=>a-b)
    console.log(resarr)
}
let arr=[20,34,88,88,91,81,2,3,3,3,4,4,5]
sortUnique(arr)