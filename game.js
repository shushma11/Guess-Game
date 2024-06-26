alert("Let's play a guess game");
const max=prompt("enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess==random){
        let el=document.createElement("h4");
        el.innerText="You are right! Congrats!! Random number was "+ random;
        document.body.append(el);
        break;
    }
    else if(guess<random){
        guess=prompt("Your guess is smaller than the number");
    }
    else{
        guess=prompt("Your guess is greater than the number");
    }
}
