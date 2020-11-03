const zirkles0 = document.querySelector('.zirkles');
const sulinys1 = document.querySelector('.sulinys');
const lapas2 = document.querySelector('.lapas');

const results = document.querySelector('.results');
const yourChoice = document.querySelector('.yourChoice');
const computerChoice = document.querySelector('.computerChoice');
const yourP = document.querySelector('.yourP');
const computerP = document.querySelector('.computerP');

// let yourPoints = yourP.innerHTML;
// let computerPoints = computerP.innerHTML;
let yourPointsAdd = 0;
let computerPointsAdd = 0;

let index = 0;

zirkles0.addEventListener('click', function () {
    index === 0;
    yourChoice.innerHTML = 'Žirklės';

    let computer = Math.floor(Math.random() * 3);
    if (index === computer) {
        computerChoice.innerHTML = 'Žirklės';
    }
    if (computer === 1) {
        computerChoice.innerHTML = 'Lapas';
        yourPointsAdd++;
    }
    if (computer === 2) {
        computerChoice.innerHTML = 'Šulinys';
        computerPointsAdd++;
    }
    yourP.innerHTML = yourPointsAdd;
    computerP.innerHTML = computerPointsAdd;
    if (yourP.innerHTML == computerP.innerHTML) {
        results.innerHTML = 'Lygiosios';
    }
    if (yourP.innerHTML > computerP.innerHTML) {
        results.innerHTML = 'Tu laimi, jeeee!';
    }
    if (yourP.innerHTML < computerP.innerHTML) {
        results.innerHTML = 'Laimi kompiuteris.';
    }
})

sulinys1.addEventListener('click', function () {
    index === 1;
    yourChoice.innerHTML = 'Šulinys';

    let computer = Math.floor(Math.random() * 3);
    if (index === computer) {
        computerChoice.innerHTML = 'Šulinys';
    }
    if (computer === 0) {
        computerChoice.innerHTML = 'Žirklės';
        yourPointsAdd++;
    }
    if (computer === 2) {
        computerChoice.innerHTML = 'Lapas';
        computerPointsAdd++;
    }
    yourP.innerHTML = yourPointsAdd;
    computerP.innerHTML = computerPointsAdd;
    if (yourP.innerHTML == computerP.innerHTML) {
        results.innerHTML = 'Lygiosios';
    }
    if (yourP.innerHTML > computerP.innerHTML) {
        results.innerHTML = 'Tu laimi, jeeee!';
    }
    if (yourP.innerHTML < computerP.innerHTML) {
        results.innerHTML = 'Laimi kompiuteris.';
    }
})

lapas2.addEventListener('click', function () {
    index === 1;
    yourChoice.innerHTML = 'Lapas';

    let computer = Math.floor(Math.random() * 3);
    if (index === computer) {
        computerChoice.innerHTML = 'Lapas';
    }
    if (computer === 0) {
        computerChoice.innerHTML = 'Šulinys';
        yourPointsAdd++;
    }
    if (computer === 1) {
        computerChoice.innerHTML = 'Žirklės';
        computerPointsAdd++;
    }
    yourP.innerHTML = yourPointsAdd;
    computerP.innerHTML = computerPointsAdd;
    if (yourP.innerHTML == computerP.innerHTML) {
        results.innerHTML = 'Lygiosios';
    }
    if (yourP.innerHTML > computerP.innerHTML) {
        results.innerHTML = 'Tu laimi, jeeee!';
    }
    if (yourP.innerHTML < computerP.innerHTML) {
        results.innerHTML = 'Laimi kompiuteris.';
    }
})
