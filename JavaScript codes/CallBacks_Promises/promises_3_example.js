let result= function(score){
    return new Promise((resolve,reject)=>{
        console.log("Calculation results...")
        if(score>50){
            resolve("Congratulations you have passed")
        }   
        else{
            reject("Failed")
        }
    })
}

let grade= function(response){
    return new Promise(function(resolve,reject){
        console.log("Calculation grade...")
        resolve("Grade is A. "+response);
    })
}

// result(80)
// .then(response=> {
//     console.log("results received")
//     return grade(response);
// })
// .then(finalgrade=>{
//     console.log(finalgrade)
// })
// .catch(err=>console.log(err))

// instead of above code we use aync await

async function calculateResults(){
    try{
        const response= await result(60);
        console.log("Results Received")
        const finalgrade= await grade(response)
        console.log(finalgrade);
}
catch(err){
    console.log(err)
}
}

calculateResults();