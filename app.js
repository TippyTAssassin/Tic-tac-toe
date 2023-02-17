// STATE
const state = {
    playerNames:['', ''],
    currentPlayer: '',
    game: ['','', '', '', '', '', '', '', '']
}
// DOM SELECTORS
const restart = document.getElementById('restart-game');
const pickMode = document.getElementById('plyr-mode');
const playerSelect1 = document.getElementById('start1');
const enterName1 = document.getElementById('player1');
const nameOutput1 = document.getElementById('name1');
const computer = document.getElementById('comp');
const orderStart = document.getElementById('first-player');
const playerSelect2 = document.getElementById('start2');
const enterName2 = document.getElementById('player2');
const nameOutput2 = document.getElementById('name2');
const gameStart = document.getElementById('start-button');
const singPlyr = document.getElementById('sing-plyr');
const mltyPlyr = document.getElementById('mlty-plyr');
const section = document.getElementsByTagName('section')[0];
const winDisp = document.getElementById('winner');
const board = document.getElementsByTagName('div');
const boardCells = document.getElementById('cells').children;
// EVENT LISTENERS

//GAME BOARD

const gameBoard = (index) => {
    let boardDiv = document.createElement('div');
    section.appendChild(boardDiv);
    boardDiv.setAttribute('id', index);
    boardDiv.addEventListener('click', (clickEvent) => {
        if(clickEvent.target.innerText !== '') {
            return
        }
        const player1 = state.playerNames[0];
        if(player1 === state.currentPlayer) {
            clickEvent.target.innerText = 'X';
            state.game[clickEvent.target.id] = 'X';
            checkWin()
            state.currentPlayer = state.playerNames[1]
        } else {
            clickEvent.target.innerText = 'O';
            state.game[clickEvent.target.id] = 'O';
            checkWin()
            state.currentPlayer = state.playerNames[0];
        }
    });
    
}

const checkWin = () => {
    const letter = state.currentPlayer === state.playerNames[0] ? 'X' : 'O';
    if((((((((state.game[0] === letter &&
        state.game[1] === letter &&
        state.game[2] === letter) ||
        state.game[3] === letter &&
        state.game[4] === letter &&
        state.game[5] === letter) ||
        state.game[6] === letter &&
        state.game[7] === letter &&
        state.game[8] === letter) ||
        state.game[0] === letter &&
        state.game[3] === letter &&
        state.game[6] === letter) ||
        state.game[1] === letter &&
        state.game[4] === letter &&
        state.game[7] === letter) ||
        state.game[2] === letter &&
        state.game[5] === letter &&
        state.game[8] === letter) ||
        state.game[0] === letter &&
        state.game[4] === letter &&
        state.game[8] === letter) ||
        state.game[2] === letter &&
        state.game[4] === letter &&
        state.game[6] === letter)
    {
        winDisp.style.visibility = 'visible';
        winDisp.innerText = `${player1.value} ${state.currentPlayer} WINS!`;
    }

}

for(let i = 0; i <= 8; i++) {
    gameBoard(i);
}

playerSelect1.addEventListener('click', () => {
    let playerId1 = 'Player 1:';
    state.playerNames[0] = enterName1.value;
    state.currentPlayer = state.playerNames[0];
    nameOutput1.innerText = `${playerId1} ${enterName1.value}`;
    enterName1.value='';
});

playerSelect2.addEventListener('click', () => {
    let playerId2 = 'Player 2:';
    state.playerNames[1] = enterName2.value;
    nameOutput2.innerText = `${playerId2} ${enterName2.value}`;
    enterName2.value='';
});

gameStart.addEventListener('click', () => {
    orderStart.style.visibility = 'visible';
    let pickPlayer = ['Player 1: ', 'Player 2: '];
    let player = pickPlayer[Math.floor(Math.random()*pickPlayer.length)];
    orderStart.innerText = (player + `${orderStart.innerText}`);
    gameStart.disabled = true;
})

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
        computer.style.visibility = 'hidden';
        restart.style.backgroundColor = 'red';
        gameStart.disabled = false;
    }
}); 

singPlyr.addEventListener('click', () => {
    mltyPlyr.style.visibility = 'hidden';
    playerSelect1.style.visibility ='visible';
    enterName1.style.visibility = 'visible';
    nameOutput1.style.visibility = 'visible';
    computer.style.visibility = 'visible';
    pickMode.disabled = true;
});

mltyPlyr.addEventListener('click', () => {
    singPlyr.style.visibility = 'hidden';
    playerSelect2.style.visibility ='visible';
    enterName2.style.visibility = 'visible';
    nameOutput2.style.visibility= 'visible';
    playerSelect1.style.visibility ='visible';
    enterName1.style.visibility = 'visible';
    nameOutput1.style.visibility = 'visible';
    pickMode.disabled = true;
});

restart.addEventListener('click', () => {
    restart.style.backgroundColor = '#f0f0f0';
    singPlyr.style.visibility = 'hidden';
    nameOutput1.innerText = 'Player 1:';
    enterName1.style.visibility = 'hidden';
    playerSelect1.style.visibility = 'hidden';
    nameOutput1.style.visibility = 'hidden';
    mltyPlyr.style.visibility = 'hidden';
    enterName2.style.visibility = 'hidden';
    playerSelect2.style.visibility = 'hidden';
    nameOutput2.style.visibility = 'hidden';
    nameOutput2.innerText = 'Player 2:';
    computer.style.visibility = 'hidden';
    orderStart.style.visibility = 'hidden';
    gameStart.disabled = false;
    orderStart.innerText = 'Goes 1st!';
    pickMode.disabled = false;
    winDisp.innerText = '';
    board[0].innerText = '';
    board[1].innerText = '';
    board[2].innerText = '';
    board[3].innerText = '';
    board[4].innerText = '';
    board[5].innerText = '';
    board[6].innerText = '';
    board[7].innerText = '';
    board[8].innerText = ''; 
    state.game[0] = '';
    state.game[1] = '';
    state.game[2] = '';
    state.game[3] = '';
    state.game[4] = '';
    state.game[5] = '';
    state.game[6] = '';
    state.game[7] = '';
    state.game[8] = '';
});