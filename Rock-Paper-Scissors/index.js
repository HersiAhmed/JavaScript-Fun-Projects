var imgArray = ["rock", "paper", "scissors"];
var player1 = "";
var player2 = "";
for(var i = 0; i < imgArray.length; i++){
    player1 = imgArray[Math.floor(Math.random() * imgArray.length)];
    player2 = imgArray[Math.floor(Math.random() * imgArray.length)];
    document.querySelector(".playerone").src = "png/" + player1 + ".png"
    document.querySelector(".playertwo").src = "png/" + player2 + ".png"
    
    if(player1 == "rock" && player2  == "scissors" || player1 == "paper" && player2 == "rock" || player1 == "scissors" && player2 == "paper"){
        document.querySelector(".result").innerHTML = "Player 1 wins"
    }
    else if(player2 == "rock" && player1  == "scissors" || player2 == "paper" && player1 == "rock" || player2 == "scissors" && player1 == "paper"){
        document.querySelector(".result").innerHTML = "Player 2 wins"
    }
    else{
        document.querySelector(".result").innerHTML = "Draw";
        
    }
   
    
}


