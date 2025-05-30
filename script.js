let boxes=document.querySelectorAll(".box");
    let resetbtn=document.querySelector("#reset");
    let newbtn=document.querySelector("#newgame-btn");
    let msg=document.querySelector(".winner");
    let winnerbox=document.querySelector(".winnerbox");
    let turnO=true;
    let winnerFound=false;

    let  winpatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
          box.innerHTML="X" ;
          turnO=true; 
        }
        box.disabled=true;

        checkwinner();
    });
  });
  
 const disablebox = () =>{
    for(let box of boxes){
      box.disabled=true;
    }
  }

  const enablebox = () =>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
  }
  const  showwinner = (winner) =>{
     msg.innerHTML = `Congratulations winner is ${winner}`;
     winnerbox.classList.remove("hide");
     disablebox();
  }

  const showDraw = () => {
    msg.innerHTML = "It's a draw!";
    winnerbox.classList.remove("hide");
    disablebox();}

    const reset =()=>{
      turnO=true;
      winnerbox.classList.add("hide");
      console.log("bx is hided");
      enablebox();
     }
     resetbtn.addEventListener("click",reset);
   newbtn.addEventListener("click",reset);

  const checkwinner = () => {
   
    for (let pattern of winpatterns) {
      let val1 = boxes[pattern[0]].innerText;
      let val2 = boxes[pattern[1]].innerText;
      let val3 = boxes[pattern[2]].innerText;
      if (val1 !== "" && val2 !== "" && val3 !== "") {
          if (val1 === val2 && val2 === val3) {
              console.log("winner", val1);
              showwinner(val1);
              winnerFound=true;
             break;
        }
      }
    }
  };

  if (!winnerFound) {
    let allFilled = Array.from(boxes).every(box => box.innerText !== "");
    if (allFilled) {
        console.log("It's a draw");
        showDraw();
    }

}

 


  
      
        
    
