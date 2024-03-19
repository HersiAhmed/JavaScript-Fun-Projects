let words = ["fleet", "bench", "fixed", "mount", "night", "draft", "cream", "again", "prize", "calif", 
"prime","guest","alert","tired","radio","cause","speak","early", "fully", "upper", "store", "crime", "arise",
"eager", "solve", "march", "quiet", "point", "floor", "craft", "drawn", "equal", "water", "stage", "style", "ratio", "layer", "array", "phone"];
let word = "";
turns = 0;
maxTurns = 6;
let input = [];
let finalArr = [];
let secArr = [];
let deletedArr = [];
function createGame(){
    for(let i = 0; i < 30; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "spot";
        document.querySelector(".game-container").appendChild(newDiv);
        let className = (i % 5) + 1;
        document.querySelectorAll(".spot")[i].classList.add(className.toString());
    }   

}

createGame();
function playGame(value){
    value = word;
    for(let i = 0; i < 30; i++){
        document.querySelectorAll(".spot")[i].addEventListener("click", function(){
            console.log(value);
        })
    }
    spots = document.querySelectorAll(".spot");
    document.querySelector(".delete").addEventListener("click", function(){
        secArr = secArr.slice(0, secArr.length - 1);
        updateDeletion();
    })
    
    document.addEventListener("keydown", function(e){ 
        console.log(input.length);
        input.push(e.key);
        secArr.push(e.key);
        if(input.length == 5 && input.join('') == value){
            console.log("YOU WIN");
            input.forEach((letter, index) => {
                spots[turns * 5 + index].style.backgroundColor = "green";
            });
            input = [];
            turns++;
        }
        else if(input.length == 5 && input.join('') != value ){
            console.log("Wrong");
            if(turns < maxTurns){
                input.forEach((letter, index) => {
                    if(word.indexOf(letter) !== -1){
                        if(word[index] === letter){
                            spots[turns * 5 + index].style.backgroundColor = "green";
                        } else {
                            spots[turns * 5 + index].style.backgroundColor = "orange";
                        }
                    } else {
                        spots[turns * 5 + index].style.backgroundColor = "red";
                    }
                });
                input = [];
                turns++;
            }
            input = [];
            if(secArr.length == 30){
                console.log("Game Over");
                console.log("The word was " + value);
            }
            for(let j = 0; j < input.length; j++){
                spots[j].style.backgroundColor = "red";
            }
        }
        updateDeletion();
    })
}

function updateDeletion(){
    let nextLine = [];
    nextLine = finalArr; 
    finalArr = secArr;
    for(let i = 0; i < 30; i++){
        if (i < finalArr.length) {
            spots[i].innerHTML = finalArr[i];
            console.log(input);
        }
        else {
            spots[i].innerHTML = ""
        }
    }
}

function wordSelect(){
    word = words[Math.floor(Math.random(words.length) * words.length)];
    playGame();
}
wordSelect();
