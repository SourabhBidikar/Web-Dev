

let a =Math.random()*100
a=Number.parseInt(a)
let input;
let score=100;

while(input!=a)
{   
    score-=1;
    input=prompt("guess the number between 0 and 100:")

    if(input==a){
        alert(`Congratulations!!! You guessed the right number in ${100-score} chances`)
    }

    else if(input>a && input<100){
        alert(`Number is smaller than ${input}`);
    }

    else if(input<a && input>0){
        alert(`Number is bigger than ${input}`);
    }
    else{
        alert("Enter between 0 and 100")
    }

}