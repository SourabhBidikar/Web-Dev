try {

    console.log(pppp);
    console.log("Program ran sucessfully");
} 
catch (error) {
    console.log(`error occured: \n error type: ${error.type} \n error message:${error.message}`);
    console.log(e)
}
finally{
    console.log("Finally ran");
}

console.log("outside code")