let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let map1 = document.querySelector('.map1');
let map2 = document.querySelector('.map2');
let score1 = 50;
let score2 = 50;
let i = 50;
let j = 50;
function redTouch(){
    score1 += 1;
    let a = j + i;
    let b = (j * 100) / a;
    let c = (i * 100) / a;
    map1.style.width = c + '%'; 
    map2.style.width = b + '%';
    i++;
    // map1.style.width = i + '%';
    // i++;
    player1.innerHTML = score1;
    if(score1 === 500){
        resBtn();
        alert('player red won');
    }
}
function blueTouch(){
    score2 += 1;
    let a = j + i;
    let b = (j * 100) / a;
    let c = (i * 100) / a;
    map1.style.width = c + '%'; 
    map2.style.width = b + '%';
    j++;
    player2.innerHTML = score2;
    if(score2 === 500){
        resBtn();
        alert('player blue won');
    }
}
function resBtn(){
    map1.style.width = 50 + '%';
    map2.style.width = 50 + '%';
    player1.innerHTML = score1 = 50;
    player2.innerHTML = score2 = 50;
}
