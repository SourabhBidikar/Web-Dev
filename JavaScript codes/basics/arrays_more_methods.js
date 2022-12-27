let num = [1, 2, 3, 4]
console.log(num)
console.log(num.length)
delete num[1]
console.log(num)
console.log(num.length)


let num1 = [4, 7, 8, 3, 9, 1, 11]
num1.sort() //sorts alphabetically i.e.
//changes num1 to [1,11,3,4,7,8,9]
console.log(num1)

//if you want to sort in ascending order numerically
//pass compare funtion to the sort method

let compare=(a, b) => {
  return a - b;
}

let num2 = [448, 1, 344, 592, 2999, 332, 6757, 48]
num2.sort(compare)
console.log(num2)


//Splice method
// inserts given elements at given position and deletes existing.
//modifies actual array and also returns deleted elements as an array if assigned to
let arr1=[1,2,3,4,5,6,7,8]
console.log("original array "+arr1)
let deletedarr= arr1.splice(2,3,103,104,105);

console.log("original array after splice "+arr1)
console.log("deleted array "+deletedarr)

//slice method
//doesn't modify original array
//returns sliced elements as a different array
let arr2=[1,2,3,4,5,6,7,8]
console.log("original array "+arr2)
let slicedarr=arr2.slice(2,5)   //excludes 5

console.log("original array after slice "+arr2)

console.log("new sliced array returned  "+slicedarr)