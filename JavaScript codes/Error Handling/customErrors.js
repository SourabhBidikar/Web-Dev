//error object

try{
    harry
}
catch(e){
    console.log(e)
    console.log(e.name)
    console.log(e.message)
}

//custom error 
try{
    throw new ReferenceError("sourabh is not defined")
}
catch(err){
    console.log(err)
}


//nice example


try{
    let age=prompt("Enter Age")
    if(age<18) throw new Error("Under aged not allowed")
}
catch(err){
    alert(err)
}
