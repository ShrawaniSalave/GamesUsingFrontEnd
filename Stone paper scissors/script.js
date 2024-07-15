let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
    const compChoice=Math.floor(Math.random()*3);//Generate random value form 0 to 2
    return options[compChoice];
};

const drawGame=()=>{
    msg.innerText="Game was Draw.Play Again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
      userScore++;
      userScorePara.innerText=userScore;
      msg.innerText=`You Win..!! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("User choice= ",userChoice);
    //computer choice
    const compChoice=genCompChoice();
    console.log("Computer choice= ",compChoice);

    if(userChoice === compChoice)//draw game
    {
       drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")//compChoice= scissor or paper
        {
          userWin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper")//compChoice= scissor or rock
        {
            userWin= compChoice==="scissors"? false:true;
        }
        else//compChoice= rock or paper
        {
            userWin= compChoice==="rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{    //it gives individual div of three
    console.log(choice);
    //generate user choice
    choice.addEventListener("click",() =>{
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
    });
});
