let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newgame-btn");
let msg = document.querySelector(".winner");
let winnerbox = document.querySelector(".winnerbox");
let turnO = true;

let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") { // Only allow the move if the box is empty
            if (turnO) {
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;
            checkwinner(); // Check if there is a winner or a draw after each move
        }
    });
});

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerHTML = `Congratulations! The winner is ${winner}`;
    winnerbox.classList.remove("hide");
    disablebox();
}

const showDraw = () => {
    msg.innerHTML = "It's a draw!";
    winnerbox.classList.remove("hide");
    disablebox();
}

const checkwinner = () => {
    let winnerFound = false;
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if (val1 !== "" && val1 === val2 && val2 === val3) {
            console.log("winner", val1);
            showwinner(val1);
            winnerFound = true;
            break;
        }
    }

    // If no winner is found, check if all boxes are filled
    if (!winnerFound) {
        let allFilled = Array.from(boxes).every(box => box.innerText !== "");
        if (allFilled) {
            console.log("It's a draw");
            showDraw();
        }
    }
};

const reset = () => {
    turnO = true;
    winnerbox.classList.add("hide");
    enablebox();
}
resetbtn.addEventListener("click", reset);
newbtn.addEventListener("click", reset);
