function loadScript(src,callback){
    let script=document.createElement("script");
    script.src=src;

    script.onload=()=>{  //this runs the callback function just to know that script is loaded. any function which is asynchornous should have a callback to denote that action is performed. 
        console.log("Script loaded correctly.")
        callback(src)
    }

    document.head.appendChild(script);
}


function hello(src){  
    alert("Hello src "+src)
}



loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js",hello);


//hello is a callback function passed as an argument to another function i.e. loadscript, which is then invoked by the outer function (i.e. loadScript) to complete an action (i.e. here alert) 