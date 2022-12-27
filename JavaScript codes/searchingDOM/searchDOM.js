// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color="red";

// let ctitle=document.getElementById("firstcardtitle")
// ctitle.style.color="red";

let ctitles=document.querySelectorAll(".card-title")  //returns all matching
console.log(ctitles)
ctitles[0].style.color="blue";
ctitles[1].style.color="green";
ctitles[2].style.color="red";

let button=document.querySelector(".this")               //returns first element
button.style.color="red"


console.log(document.getElementsByTagName("a"))
console.log(document.querySelectorAll(".card-title").getElementsByTagName("a"))


// Similary we can have 
// getElementByName() //returns using name attribite