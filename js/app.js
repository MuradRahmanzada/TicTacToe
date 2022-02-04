const blocks = document.querySelectorAll('.block');
const playerText = document.getElementById('player');
const errorText = document.getElementById('error');
let player = "X";
let gameOver = false;
let winner;

function startGame() {
    playerText.textContent = `${player} 's Turn`

    blocks.forEach(block => block.addEventListener('click',  () => chooseArea(block)))
}

function chooseArea(block) {
    if(block.textContent === "") {
        block.textContent = player;
        if(player === "O") {
            block.style.color = "red"
        }
        turnPlayer();
    } else {
        errorText.textContent = "Heyy, it's not empty "
        block.style.border = "2px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            block.style.border = "1px solid black"
        }, 1500);
    } 
    checkWin();
    checkTie()

    if(gameOver) {
        playerText.textContent = `Game is over, ${winner} Won`
        blocks.forEach(block => block.style.pointerEvents = 'none')

    }
}

function turnPlayer() {
    if(player === "X") {
        player = "O";
        playerText.textContent = `${player} 's Turn`
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `${player}'s Turn`
    }
}

function checkWin() {
    checkRows()
    checkColumns()
    checkDiagonals()    
    //win
}

function checkTie() {
    const values = [];
    blocks.forEach(block => values.push(block.textContent))
    if(!values.includes("")){
        playerText.textContent = "Tie !";
        blocks.forEach(block.style.pointerEvents = `none`)
    }
}

function checkRows() {
    let row1 = blocks[0].textContent == blocks[1].textContent &&
    blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""

    let row2 = blocks[3].textContent == blocks[4].textContent &&
    blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""

    let row3 = blocks[6].textContent == blocks[7].textContent &&
    blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""

    if(row1 || row2 || row3) {
        gameOver = true;
    }

    if (row1) return winner = blocks[0].textContent;
    if (row2) return winner = blocks[3].textContent;
    if (row3) return winner = blocks[6].textContent;

    }

function checkColumns() {
    let col1 = blocks[0].textContent == blocks[3].textContent &&
    blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""

    let col2 = blocks[1].textContent == blocks[4].textContent &&
    blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""

    let col3 = blocks[2].textContent == blocks[5].textContent &&
    blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== ""

    if(col1 || col2 ||col3) {
        gameOver = true;
    }

    if (col1) return winner = blocks[0].textContent;
    if (col2) return winner = blocks[1].textContent;
    if (col3) return winner = blocks[2 ].textContent;

}

function checkDiagonals() {
    let dia1 = blocks[0].textContent == blocks[4].textContent &&
    blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""

    let dia2 = blocks[2].textContent == blocks[4].textContent &&
    blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""

    if(dia1 || dia2) {
        gameOver = true;
    }

    if (dia1) return winner = blocks[0].textContent;
    if (dia2) return winner = blocks[2].textContent;
}

startGame();

