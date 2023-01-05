// //example of Synchronous program

// let myName=prompt("Enter your name:")    //first this will be set
// let age=prompt("Enter your age:")           //second this will be set
// console.log("Name is "+myName+" and is "+age)   //this will print third

//Asynchronous program
console.log("start")   //first

setTimeout(()=>         //this will get scheduled and run in back
 console.log("middle")  //third after 3 secs
 ,3000)

 console.log("end")     //second 