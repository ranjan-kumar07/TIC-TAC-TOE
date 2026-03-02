let boxs = document.querySelectorAll(".box");
let p = document.querySelector("#decide");
let reset = document.querySelector("#reset");

let currentPlayer = 'X';
let gameActive = true;

const winningPatterns = [
  [0,1,2],    //row1 - - -
  [3,4,5],    //row2 - - -
  [6,7,8],    //row3 - - -
  [0,3,6],    //col1 |
  [1,4,7],    //col2 |
  [2,5,8],    //col3 |
  [0,4,8],    //diagonal top left - bottom right \
  [2,4,6]     //diagonal top right - bottom left /
];



// box playing by clicking

for(let box of boxs){

  box.addEventListener("click", ()=>{

    if(!gameActive){
        return;
      }

    if(box.innerText !== ""){
        return;
    }
    

    box.innerText = currentPlayer;

    checkWinner();
      
      if(currentPlayer === 'X'){
               currentPlayer = 'O';
      }
      else{
        currentPlayer = 'X'
      }
    
    
})
}

//winning decision


function checkWinner() {
    let isDraw = true;

    for (let pattern of winningPatterns) {

        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            p.innerText = "Winner is " + pos1;
            gameActive = false;
            return;
        }
    }

     // Check draw
    for(let box of boxs){
        if(box.innerText === ""){
            isDraw = false;
        }
    }

    if(isDraw){
        p.innerText = "It's a Draw!";
        gameActive = false;
    }

}

//reset function

reset.addEventListener("click", ()=>{
    for(let box of boxs){
        gameActive = true;
        box.innerText = "";
    }
});

reset.addEventListener("click", ()=>{

    for(let box of boxs){
        box.innerText = "";
    }

    gameActive = true;
    currentPlayer = "X";
    p.innerText = " Play Now!";

});




