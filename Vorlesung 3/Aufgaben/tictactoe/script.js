let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;


function makeMove(index) {
    // to be implemented
    if(gameOver===false){
    if (board[index] === '') {
        board[index] = currentPlayer
        const button = event.currentTarget
        button.innerHTML = board[index]
        gameOver = checkWin(currentPlayer)
        }
        if(gameOver === true){
            console.log('You win')
        }
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        }
        else {
            currentPlayer = 'X'
        }
    }
}
function resetGame() {
    // to be implemented
    const button = document.querySelector()
    button.innerHTML = board[i]
    for (let i = 0; i < 9; i++) {
        board[i] = ''
    }

}

function checkWin(Player) {
    let field = 0
    for (let i = 0; i < 3; i++) {
        if (board[field] === board[field + 1] && board[field] === board[field + 2]) {
           if(board[field]=== Player && board[field+1]===Player &&board[field+2]===Player){ 
            return true
           }
        }
        field = field + 3
    }
    field = 0
    for(let i = 0; i<3; i++){
        if(board[field] === board[field + 3] && board[field] === board[field + 6]){
           if(board[field]===Player&& board[field+3]===Player&&board[field+6]===Player){
           
                return true
        }
    }
    }
    if(board[0]===board[4] && board[0] === board[8]){
        if(board[0]===Player&& board[4]===Player&&board[8]===Player){ 
            return true
           }
    }
}