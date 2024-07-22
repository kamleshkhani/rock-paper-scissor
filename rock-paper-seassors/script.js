var usersMove;
var computersMove;
var display = document.querySelector("#answer");
var wins = document.querySelector("#wins");
var loses = document.querySelector("#loses");
var ties = document.querySelector("#ties");

var i = 0;
var j=0;
var k=0;
function userMoe(string){
    usersMove = string;
}
function result(){
    var random = Math.random();
    
    if(random>=0 && random<1/2){
        computersMove = "rock";
    }else if(random>=1/2 && random<3/4){
        computersMove = "paper";
    }else{
        computersMove = "seasor";
    }
    
    
    if(usersMove==="rock"){
        if(computersMove==="rock"){
            display.innerHTML = "match tie!"
            ties.innerHTML = k+1;
            k++;
        }else if(computersMove==="paper"){
            display.innerHTML = "you win!"
            wins.innerHTML = i+1;
            i++;
            
        }else if(computersMove==="seasor"){
            display.innerHTML = "you lose!"
            loses.innerHTML = j+1;
            j++;
        }
    }
    else if(usersMove==="paper"){
        if(computersMove==="paper"){
            display.innerHTML = "match tie"
            ties.innerHTML = k+1;
            k++;
        }else if(computersMove==="rock"){
            display.innerHTML = "you win!"
            wins.innerHTML = i+1;
            i++;
        }else if(computersMove==="seasor"){
            display.innerHTML = "you lose!"
            loses.innerHTML = j+1;
            j++;
        }
    }
    else if(usersMove==="seasor"){
        if(computersMove==="seasor"){
            display.innerHTML = "match tie!"
            ties.innerHTML = k+1;
            k++;
        }else if(computersMove==="paper"){
            display.innerHTML = "you win!"
            wins.innerHTML = i+1;
            i++;
        }else if(computersMove==="rock"){
            display.innerHTML = "you lose!"
            loses.innerHTML = j+1;
            j++;
        }
    }

}
