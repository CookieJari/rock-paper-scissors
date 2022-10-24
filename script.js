const moves = ["rock", "scissors","paper"]

let score = 0;
game()


function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log(score);
    }
    console.log("FINAL SCORE: "+score);
}

function playRound(compAns,pAns){
    
    compAns=getComputerChoice();
    pAns= playerSelection();
    console.log(compAns + '\t' + pAns);

    if(pAns==='rock'){
        if(compAns==='rock')
        return `Draw! Both chose ${pAns}`;
        else if(compAns==='paper')
        return `Lose! ${compAns} beats ${pAns}`;
        else if(compAns==='scissors'){
            score+=1;
            return `Win! ${pAns} beats ${compAns}`;
        }
    }
    else if(pAns==='paper'){
        if(compAns==='paper')
        return `Draw! Both chose ${pAns}`;
        else if(compAns==='scissors')
        return `Lose! ${compAns} beats ${pAns}`;
        else if(compAns==='rock'){
            score+=1;
            return `Win! ${pAns} beats ${compAns}`;
        }
    }
    else if(pAns==='scissors'){
        if(compAns==='scissors')
        return `Draw! Both chose ${pAns}`;
        else if(compAns==='rock')
        return `Lose! ${compAns} beats ${pAns}`;
        else if(compAns==='paper'){
            score+=1;
            return `Win! ${pAns} beats ${compAns}`;
        }
    }
    else
    return "Invalid Answer";
}


function playerSelection(){
    let ans = prompt("Choose a move");
    if (moves.includes(ans.toLowerCase()))
    return ans;
}

function getComputerChoice(){
    // math.random is 0-1 
    // we multiply this by the length of moves array
    // we then round it down so that it goes from 0-3 (whole num)
    // we put that number in the index and get the element
    return moves[Math.floor(Math.random()*moves.length)];
    
}