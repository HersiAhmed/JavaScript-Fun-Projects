let win1 = ["1","2","3"];
let win2 = ["4","5","6"];
let win3 = ["7","8","9"];
let win4 = ["1","4","7"];
let win5 = ["2","5","8"];
let win6 = ["3","6","9"];
let win7 = ["1","5","9"];
let win8 = ["3","5","7"];
let player1 = [];
let player2 = [];
let turn = 0;
let filled  = 0;
let count = 0;



function createGrid(){
    for(let i = 0; i < 9; i++){
        count++;
        let square = document.createElement("div");
        square.className = "box";
        document.querySelector(".gameGrid").appendChild(square);
        document.querySelectorAll(".box")[i].classList.add(count);
    }
}

createGrid();

function playGame(){
    // player clicks a square, when they do player 1 array gets appended a position being 1-9. 
    // players will alterante. once 3 in a row are found, or there isn't any spots left. text will appear declaring something, and the board will reset. 
    for(let i = 0; i < 9; i++){
        let c2 = 3;
        c2++;
        let box =  document.querySelectorAll(".box")[i];
        box.addEventListener("click", function (){
            turn++;
            let classNum = document.querySelectorAll(".box")[i].className.split(" ");
            if(box.innerHTML == ""){
                if(turn % 2 != 0){
                    box.innerHTML = "O";
                    box.style.color = "blue";
                    box.classList.add("filled");
                    player1.push(classNum[1]);
                    checkWinner(player1, win1);
                    checkWinner(player1, win2);
                    checkWinner(player1, win3);
                    checkWinner(player1, win4);
                    checkWinner(player1, win5);
                    checkWinner(player1, win6);
                    checkWinner(player1, win7);
                    checkWinner(player1, win8);
                  
                }
                else{
                    box.innerHTML = "X";
                    box.style.color = "red";
                    box.classList.add("filled");
                    player2.push(classNum[1]);
                    checkWinner(player2, win1);
                    checkWinner(player2, win2);
                    checkWinner(player2, win3);
                    checkWinner(player2, win4);
                    checkWinner(player2, win5);
                    checkWinner(player2, win6);
                    checkWinner(player2, win7);
                    checkWinner(player2, win8);
                }
            }
            else{
                alert("spot is filled")
                turn -= 1;
            }
            if(turn == 9 && document.querySelector(".message").innerHTML == ""){
                document.querySelector(".message").innerHTML = "It's a Draw"
                for(let i = 0; i < 9; i++){
                    document.querySelectorAll(".box")[i].innerHTML = '';
                }
            }
        })
    }
}

function checkWinner(arr1, arr2){

    for (let element of arr2) {
        if (!arr1.includes(element)) {
        return false;
        }
    }
    if(turn % 2 != 0){
        console.log(turn);
        document.querySelector(".message").innerHTML = "Player 1 Wins!"
        turn = 0;
        for(let i = 0; i < 9; i++){
            document.querySelectorAll(".box")[i].innerHTML = '';
        }
        return true;
    }
    else if(turn % 2 == 0){
        document.querySelector(".message").innerHTML = "Player 2 Wins!"
        turn = 0;
        for(let i = 0; i < 9; i++){
            document.querySelectorAll(".box")[i].innerHTML = '';
        }
        return true;
    }
    return true;
    
    
}
playGame();
restartGame();

function gameEnd(){
    for(let i = 0; i < 9; i++){
        console.log(document.querySelectorAll(".box")[i].classList);
        document.querySelectorAll(".box")[i].innerHTML = '';
        document.querySelectorAll(".box")[i].classList.remove("filled");

    }
    
    document.querySelector(".message").innerHTML = "";
    player1 = [];
    player2 = [];
    turn = 0;
}

function restartGame(){
    document.querySelector(".restart").addEventListener("click", function(){
        
        for(let i = 0; i < 9; i++){
            console.log(document.querySelectorAll(".box")[i].classList);
            document.querySelectorAll(".box")[i].innerHTML = '';
            document.querySelectorAll(".box")[i].classList.remove("filled");

        }
        
        document.querySelector(".message").innerHTML = "";
        player1 = [];
        player2 = [];
        turn = 0;
    })
}