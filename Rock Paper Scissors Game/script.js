let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userscoredis = document.querySelector('#user-score');
const computerscoredis = document.querySelector('#comp-score');



const drawgame = () => {
    // console.log("It's a draw!");
    msg.innerText = "It's a draw!";
}
const userwins = () => {
    userscore++;
    userscoredis.innerText = userscore;
    // console.log("User wins! User score is", userscore);
    msg.innerText = "User wins! ";
    msg.style.backgroundColor = "green";
}
const computerwins = () => {
    computerscore++;
    computerscoredis.innerText = computerscore;
    // console.log("Computer wins! Computer score is", computerscore);
    msg.innerText = "Computer wins! ";
    msg.style.backgroundColor = "red";
}

const comprandomscore = () => {
    let option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return option[random];
}

const playgame =  (userid) => {
    console.log("userid is",userid);
    const computerchoice = comprandomscore();
    console.log("computer choice is", computerchoice);

    if(userid === computerchoice) {
        drawgame();
    }
    else if((userid === "rock" && computerchoice === "scissors") ||
            (userid === "paper" && computerchoice === "rock") ||
            (userid === "scissors" && computerchoice === "paper")) {        
        userwins();
    }       
else {        
        computerwins();
    }   
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userid = choice.getAttribute("id");
        // console.log("choice is checked")
        playgame(userid);
    })
}) 
