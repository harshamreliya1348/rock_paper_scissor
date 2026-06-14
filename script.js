let user_score = 0;
let comp_score = 0;
let reset =document.querySelector("#reset");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
 
reset.addEventListener("click",()=>{
     user_score=0;
     comp_score=0;
     userpara.innerText=user_score;
     comppara.innerText=comp_score;
     msg.innerText="Play your Move";
     msg.style.backgroundColor="#081b31";
   })
 let userpara=document.querySelector("#user-score");
 let comppara=document.querySelector("#comp-score");
    const Draw_Game = ()=>{
        msg.innerText="Game Draw , Play again";
        msg.style.backgroundColor ="#081b31";
    }
    const ShowWinner = (UserWin,CompChoice,UserChoice)=>{
        if (UserWin){
               user_score++;
               userpara.innerText=user_score;
                msg.innerText=`You Win! Your ${UserChoice} beats ${CompChoice}`;
                msg.style.backgroundColor ="green";
        }
        else{
            comp_score++;
            comppara.innerText=comp_score;
            msg.innerText=`You Lose! ${CompChoice} beats Your ${UserChoice}`;
            msg.style.backgroundColor ="red";
        }
    }
 const comp_choice = ()=>{
       const option =["rock","paper","scissors"];
     const random = Math.floor(Math.random() *3);
     return option[random];
 }

    const PlayGame =(UserChoice)=>{
        const CompChoice = comp_choice();
           if(UserChoice===CompChoice){
                Draw_Game();
           }
           else{
            let UserWin = true;
               if(UserChoice==="rock"){
                    UserWin=CompChoice==="paper"? false: true;
               }
               else if(UserChoice==="paper"){
                UserWin=CompChoice==="scissors"? false : true;
               }
               else{
                  UserWin=CompChoice==="rock"? false : true;
               }
               ShowWinner(UserWin,CompChoice,UserChoice);
           }
             
           
    }

 choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const UserChoice = choice.getAttribute("id");
            PlayGame(UserChoice);
        }) 
   })