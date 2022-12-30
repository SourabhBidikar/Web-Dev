let dragenter=document.querySelector(".box");

console.log(dragenter)
dragenter.onclick=()=>{
    console.log("clicked in box")
    dragenter.innerHTML="I clicked in box";
}