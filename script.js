const moves = ["rock", "scissors","paper"]

let score = 0;
let cScore = 0;
let text=""
//this is for when we want to put another paremeter in the function
moves.forEach(function(item,index){fun(item,index, ', ')});
document.querySelector("h1").innerHTML=text;
//plays the games
//game()

function fun(cVal,index,yes){
text+= cVal.toUpperCase()+yes;
}


//gets the constants of the buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

//makes the onclick events
rockBtn.onclick = () => game('rock');
paperBtn.onclick = () => game('paper');
scissorsBtn.onclick = () => game('scissors');





//This code plays a game and once someone reaches 5 points the game restarts 
function game(pAns){
    

    let logs = ""

    logs+=playRound(pAns);
    logs+="<br>"

    logs+="Score: "+ score;
    logs+="<br>"

    logs+="Computer Score: "+cScore;
    logs+="<br><br>"
    if (score === 5) {
        logs+="Game over! <br> YOU WIN!<br><br>"
        score = 0;
        cScore = 0;
    }
    else if(cScore === 5){
        logs+="Game over! <br> YOU LOSE!!<br><br>"
        score = 0;
        cScore = 0;
    }

    document.querySelector(".scoreboard").innerHTML+=logs;
}

// Plays 1 round of rps
// adds +1 point to the global score variable when player wins
function playRound(pAns){
    
    compAns=getComputerChoice();
    //pAns= playerSelection();
    console.log(pAns + '\t' + compAns);

    if(pAns==='rock'){
        if(compAns==='rock')
        return `Draw! Both chose ${pAns}`;
        else if(compAns==='paper'){
            cScore+=1;
            return `Lose! ${compAns} beats ${pAns}`;
        }
            
        else if(compAns==='scissors'){
            score+=1;
            return `Win! ${pAns} beats ${compAns}`;
        }
    }
    else if(pAns==='paper'){
        if(compAns==='paper')
        return `Draw! Both chose ${pAns}`;
        else if(compAns==='scissors'){
            cScore+=1;
            return `Lose! ${compAns} beats ${pAns}`;
        }
        else if(compAns==='rock'){
            score+=1;
            return `Win! ${pAns} beats ${compAns}`;
        }
    }
    else if(pAns==='scissors'){
        if(compAns==='scissors')
        return `Draw! Both chose ${pAns}`;
        else if(compAns==='rock'){
            cScore+=1;
            return `Lose! ${compAns} beats ${pAns}`;
        }
        else if(compAns==='paper'){
            score+=1;
            return `Win! ${pAns} beats ${compAns}`;
        }
    }
    else
    return "Invalid Answer";
}

//prompts the player for an answer
function playerSelection(){
    let ans = prompt("Choose a move");
    if (ans===null)
    return
    if (moves.includes(ans.toLowerCase()))
    return ans;
}

function getComputerChoice(){
    // randomly returns an index of the array
    // math.random is 0-1 
    // we multiply this by the length of moves array
    // we then round it down so that it goes from 0-3 (whole num)
    // we put that number in the index and get the element
    return moves[Math.floor(Math.random()*moves.length)];
    
}