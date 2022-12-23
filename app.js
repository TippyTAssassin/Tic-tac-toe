// DOM SELECTORS
const playerSelect1 = document.getElementById('start-one');
let enterName1 = document.getElementById('player1');
const nameOutput1 = document.getElementById('name1');
const playerSelect2 = document.getElementById('start-two');
const enterName2 = document.getElementById('player2');
const nameOutput2 = document.getElementById('name2');

// EVENT LISTENERS
playerSelect1.addEventListener('click', () => {
 enterName1.innerText = nameOutput1.value;
});

