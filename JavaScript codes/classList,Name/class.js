let first =document.getElementById('first')
console.log(first)
console.log(first.innerHTML)


  
first.innerHTML=first.innerHTML+" Boy"
first.className="yellow textblack bluetshirt";

first.classList.remove('bluetshirt')

first.classList.toggle('violetbg')

first.classList.contains('red')   //false
first.classList.contains('yellow')  //true