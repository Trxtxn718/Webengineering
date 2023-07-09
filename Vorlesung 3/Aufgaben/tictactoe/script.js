let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let game = false;

function makeMove(index) {
    let cells = document.querySelectorAll(".cell");

    if (cells[index].innerHTML == '') {
        cells[index].innerHTML = currentPlayer;
    }

    if (currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }


    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '') game = true;
    if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != '') game = true;
    if (cells[6].innerHTML == cells[7].innerHTML && cells[6].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '') game = true;

    if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '') game = true;
    if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '') game = true;
    if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '') game = true;

    if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '') game = true;
    if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '') game = true;

    if (game) {
        if (currentPlayer == 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        document.querySelector("h1").innerHTML = currentPlayer + " won!";
    }
}

function resetGame() {
    let cells = document.querySelectorAll(".cell");
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    game = false;
    document.querySelector("h1").innerHTML = "Tic Tac Toe";
    currentPlayer = 'X';
}