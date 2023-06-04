const cells = document.querySelectorAll(".cell");
const clickableCells = document.querySelectorAll(".clickable")
const startButton = document.getElementById("start-button")
const menu = document.getElementById("menu")
const displayText = document.getElementById("text-display")
var currentTurn = "X"

clickableCells.forEach(cell => {
    cell.addEventListener('click',function(){
        cellClicked(cell);
    },false);

})

startButton.addEventListener('click', function(){
    startGame()
},false)

function startGame(){
    cells.forEach(cell => {
        cell.textContent = ""
        cell.classList.add("clickable")
        menu.style.display = "none"
    })
}

function cellClicked(cell){
    if(cell.textContent!=""){
        return
    }
    cell.textContent = currentTurn
    cell.classList.remove("clickable")
    if(checkWin(cell)){
        showMenu(cell.textContent+" Wins")
    }
    if(noEmptyCells()){
        showMenu("Draw")
    }

    changeTurn(cell)
}

function noEmptyCells(){
    let full = true
    Array.from(cells).forEach(cell => {
        if(cell.textContent==""){

            full = false
        }
    });
    return full
}
function showMenu(message){
    menu.style.display = "flex"
    displayText.textContent = message
}

function checkWin(clickedCell){
    let index = Array.from(cells).indexOf(clickedCell)
    if(checkColumn(index,currentTurn)) return true;
    if(checkRow(index,currentTurn)) return true;
    if(checkDiagonal(currentTurn)) return true;
    return false;
}

function checkRow(index,value){
    let firstPlace = parseInt((index/3))*3
    for(let i=0;i<3;i++){
        if(Array.from(cells)[i+firstPlace].textContent!=value){
            return false;
        }
    }
    return true
}

function checkColumn(index,value){
    let firstPlace = index%3
    for(let i=firstPlace; i<9;i+=3){
        if(Array.from(cells)[i].textContent!=value){
            return false;
        }
    }
    return true;
}

function checkDiagonal(value){
    if(checkFirstDiagonal(value)) return true
    if(checkSecondDiagonal(value)) return true
    return false
}

function checkFirstDiagonal(value){
    for(let i=0;i<9;i+=4){
        if(Array.from(cells)[i].textContent!=value){
            return false;
        }
    }
    return true
}
function checkSecondDiagonal(value){
    for(let j=2;j<7;j+=2){
        if(Array.from(cells)[j].textContent!=value){
            return false;
        }
    }
    return true
}
function changeTurn(cell){
    if(currentTurn === "X"){
        cell.style.color = "yellow"
        currentTurn = "0"
    }
    else {
        currentTurn = "X"
        cell.style.color = "red"
    }
}
//Footer text set
const creatorName = "Juan Pereira"
const year = new Date().getFullYear()
const footer = document.getElementById("footer-text")
footer.textContent += " "+creatorName + " - "+ year