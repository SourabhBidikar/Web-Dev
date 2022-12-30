// document.write('Sourabh')

// let a = setTimeout(()=> alert("Inside settimeout"),5000);

// console.log(a)

// let ans = prompt("Do you want to run setTimeout ans yes or no")

// if(ans==='no'){
//     clearTimeout(a);
// }
//  //to stop execution of setTimeout methods

//  let add = (a,b)=>console.log("Sum is "+(a+b))

// setTimeout(add,4000,3,4)

let first = document.getElementById('first')

let display=()=>{first.innerHTML="Hello Sourabh"}
setInterval(display,2000)


setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

