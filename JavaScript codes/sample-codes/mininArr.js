let num=[132,44,2,55,3]

// let minVal= Math.min(...num)  
// spread / rest operator (...). The spread syntax allows an expression to be expanded in places where multiple arguments are expected. The rest parameter syntax is used for functions with a variable number of arguments. The spread / rest operator for arrays was introduced in ES6.
let minVal= Math.min.apply(null,num)  
console.log(minVal)