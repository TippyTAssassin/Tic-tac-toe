// STATE
let state = {
    playerNames:['', ''],
    currentPlayer: '',
    game: ['0','1', '2', '3', '4', '5', '6', '7', '8',],
    plyrWin: '',
}
// DOM SELECTORS
const pickMode = document.getElementById('plyr-mode');
const playerSelect1 = document.getElementById('start1');
const enterName1 = document.getElementById('player1');
const nameOutput1 = document.getElementById('name1');
const playerSelect2 = document.getElementById('start2');
const enterName2 = document.getElementById('player2');
const nameOutput2 = document.getElementById('name2');
const singPlyr = document.getElementById('sing-plyr');
const mltyPlyr = document.getElementById('mlty-plyr');
const section = document.getElementsByTagName('section')[0];
const winDisp = document.getElementById('winner');
const boardId = document.getElementById('cell');
const boardCells = document.getElementById('cells').children;

// EVENT LISTENERS

//GAME BOARD
const gameBoard = (cellClicked) => {
    let boardDiv = document.createElement('div');
    section.appendChild(boardDiv);
    boardDiv.setAttribute('id', 'cell');
    boardDiv.addEventListener('click', (clickEvent) => {
        const player1 = state.playerNames[0];
        // console.log(state.currentPlayer);
        if(player1 === state.currentPlayer) {
            clickEvent.target.innerText = 'X';
        } else {
            clickEvent.target.innerText = 'O';
        }  
        if(state.currentPlayer === state.playerNames[0]) {
            state.currentPlayer = state.playerNames[1];
        } else {
            state.currentPlayer = state.playerNames[0];
        }
        const cell1 = state.game[0];
        if(clickEvent.target === boardCells[0]) {
            clickEvent.target = cell1;
            // console.log(cell1);
        }
        const cell2 = state.game[1];
        if(clickEvent.target === boardCells[1]) {
            clickEvent.target = cell2;
            // console.log(cell2);
        }
        const cell3 = state.game[2];
        if(clickEvent.target === boardCells[2]) {
            clickEvent.target = cell3;
            // console.log(cell3);
        }
        const cell4 = state.game[3];
        if(clickEvent.target === boardCells[3]) {
            clickEvent.target = cell4;
            // console.log(cell4);
        }
        const cell5 = state.game[4];
        if(clickEvent.target === boardCells[4]) {
            clickEvent.target = cell5;
            // console.log(cell5);
        }
        const cell6 = state.game[5];
        if(clickEvent.target === boardCells[5]) {
            clickEvent.target = cell6;
            // console.log(cell6);
        }
        const cell7 = state.game[6];
        if(clickEvent.target === boardCells[6]) {
            clickEvent.target = cell7;
            // console.log(cell7);
        }
        const cell8 = state.game[7];
        if(clickEvent.target === boardCells[7]) {
            clickEvent.target = cell8;
            // console.log(cell8);
        }
        const cell9 = state.game[8];
        if(clickEvent.target === boardCells[8]) {
            clickEvent.target = cell9;
            // console.log(cell9);
        }
    });

}

for(let i = 1; i <= 9; i++) {
    gameBoard(i);
}


playerSelect1.addEventListener('click', () => {
    const playerId1 = 'Player 1:';
    state.playerNames[0] = enterName1.value;
    state.currentPlayer = state.playerNames[0];
    nameOutput1.innerText = `${playerId1} ${enterName1.value}`;
    enterName1.value='';
});

playerSelect2.addEventListener('click', () => {
    const playerId2 = 'Player 2:';
    state.playerNames[1] = enterName2.value;
    nameOutput2.innerText = `${playerId2} ${enterName2.value}`;
    enterName2.value='';
});

pickMode.addEventListener('click', () => {
    mltyPlyr.style.visibility = 'visible';
    singPlyr.style.visibility = 'visible';
    if(singPlyr) {
        enterName2.style.visibility = 'hidden';
        playerSelect2.style.visibility = 'hidden';
        nameOutput2.style.visibility = 'hidden';
    }
    if(pickMode){
        enterName1.style.visibility = 'hidden';
        playerSelect1.style.visibility = 'hidden';
        nameOutput1.style.visibility = 'hidden';
    }
}); 

singPlyr.addEventListener('click', () => {
    mltyPlyr.style.visibility = 'hidden';
    playerSelect1.style.visibility ='visible';
    enterName1.style.visibility = 'visible';
    nameOutput1.style.visibility = 'visible';
});

mltyPlyr.addEventListener('click', () => {
    singPlyr.style.visibility = 'hidden';
    playerSelect2.style.visibility ='visible';
    enterName2.style.visibility = 'visible';
    nameOutput2.style.visibility= 'visible';
    playerSelect1.style.visibility ='visible';
    enterName1.style.visibility = 'visible';
    nameOutput1.style.visibility = 'visible';
});

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// console.log(winCombos);
let gameWon = false;
for(let i = 0; i <= 7; i++) {
    const innerArr = winCombos[i];
    // console.log(innerArr);
    let winA = state.game[innerArr[0]];
    let winB = state.game[innerArr[1]];
    let winC = state.game[innerArr[2]];

    console.log(winA);
    // console.log(winB);
    // console.log(winC);

    if(winA === '' || winB === '' || winC === '') {
        continue;
    }
    
    // console.log(gameWon);
}


