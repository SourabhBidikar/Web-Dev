let div=document.getElementsByTagName('div')[0]

// a.innerHTML= a.innerHTML+'<h1>Hello World</h1>';   //first way


let h1= document.createElement('h1')
h1.innerHTML = 'Hello Sourabh';
div.append(h1)
// div.prepend(h1)
// div.before(h1)
// div.after(h1)
// div.replaceWith(h1)
