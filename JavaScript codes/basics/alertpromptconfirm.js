alert("Hi")
let num= prompt("Enter a number",555)
num= Number.parseInt(num);
alert("Type of num is: "+typeof num )

let write=confirm("Do you want to print it")

if(write){
    document.write(num)
}