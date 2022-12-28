// STATE
const state = {
    players: ['']
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

// EVENT LISTENERS

playerSelect1.addEventListener('click', () => {
    const playerId1 = 'Player 1:'
    nameOutput1.innerText = `${playerId1} ${enterName1.value}`;
    enterName1.value='';
   });

   playerSelect2.addEventListener('click', () => {
    const playerId2 = 'Player 2:'
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

//GAME BOARD



