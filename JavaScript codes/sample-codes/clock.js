let id1=document.getElementById('id1')

setInterval(myClock,1000)

function myClock(){
    let date= new Date()
    
    id1.innerHTML=date.toLocaleTimeString();
    id1.style.fontSize='30px';
}