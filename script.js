let boxes=document.querySelectorAll(".box");

let reset=document.querySelector("#reset");


let turn="X";
let count=0;
// let turnO=true;
 //playerX,playerO

const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

 for(let box of boxes){  //also use foreach loop
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        // box.innerText="abc"
        // if(turnO){
        //    box.innerText="O";
        //    turnO=false;
        // }
        // else{
        //     box.innerText="X";
        //     turnO=true;
        // }
        if(turn==="X"){
            box.innerText="X";
            turn="O";
        }
        else{
            box.innerText="O";
            turn="X";
        }
        box.disabled=true; 
           count++;
        checkWinner();
        checkDraw();
        
    });
};

const checkWinner=()=>{
  for(let pattern of winPatterns){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1Val=boxes[pattern[0]].innerText
    let pos2Val=boxes[pattern[1]].innerText
    let pos3Val=boxes[pattern[2]].innerText
    if(pos1Val !=""&&pos2Val !="" && pos3Val !="" ){
        if(pos1Val==pos2Val&& pos2Val==pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
            disableBoxes();
        }
    }
  } 
}
 let checkDraw=()=>{
    if(count===9){
        console.log("the game is draw" );
        showDraw();
    }

 }
 let showDraw=()=>{
    msg.innerText="The game is Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
 }


let gameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg"); 

const showWinner=(winner)=>{
   msg.innerText=`Congratulations , Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   
 
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
}

const resetGame=()=>{
// turnO=true;
 turn="X";
enableBoxes();
msgContainer.classList.add("hide");
}

gameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

