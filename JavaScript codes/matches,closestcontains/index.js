let id1=document.getElementById("id1")
//matches

console.log(id1.matches(".class1"))  /*==>false*/
console.log(id1.matches(".box"))  /*==>true that is it id1 matches box*/

console.log(sp1.closest(".box"))  /*==> returns that element that div where class is box*/

console.log(id1.contains(sp1))  /*true*/
console.log(sp1.contains(sp1))  /*true*/
console.log(sp1.contains(id1))  /*true*/