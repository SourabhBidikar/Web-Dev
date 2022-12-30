let id1=document.getElementById('id1')

let x=(e)=>{
    console.log(e)
    alert("Hello World 1")
}
let y=()=>{
    alert("Hello World 2")
}

id1.addEventListener('click',x)

id1.addEventListener('click',y)

let key=prompt("enter key:")

if(key=='1'){
    id1.removeEventListener('click',y)
}

if(key=='2'){
    id1.removeEventListener('click',x)
}