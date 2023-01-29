setTimeout(()=>{

    console.log("Hacking Wifi.... Please Wait....");        
    
},1000)

// Below works
try{
    console.log(rahul)
}
catch(e){
    console.log("balle balle")
}


//Below code doesn't work
// try{
//     setTimeout(()=>{
//     console.log(rahul)
// },100)}
// catch(e){
//     console.log("balle balle")
// }


// Below works
try{
    setTimeout(()=>{
    try{    
        console.log(rahul)
    }
    catch(err){
        console.log("bababab")
    }
},100)}

catch(e){
    console.log("balle balle")
}










setTimeout(()=>{
    
    console.log("Fetching Username and password.... Please Wait...");        
    
},2000)


setTimeout(()=>{
    
    console.log("Hacking id ....");        
    
},3000)


setTimeout(()=>{
    
    console.log("Username and password hacked....");        
    
},4000)
