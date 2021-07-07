const key = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => handlerKeyDown(event));
document.addEventListener('keyup', (event) => handlerKeyUp(event));
const keyW = document.querySelector('.W-key');
const keyS = document.querySelector('.S-key');
const keyA = document.querySelector('.A-key');
const keyD = document.querySelector('.D-key');

const handlerKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 87) {
        keyW.style.background = '#000000';
        keyW.style.color = '#ffffff';
    }
    else if (event.keyCode === 40 || event.keyCode === 83) {
        keyS.style.background = '#000000';
        keyS.style.color = '#ffffff';
    }
    else if (event.keyCode === 37 || event.keyCode === 65) {
        keyA.style.background = '#000000';
        keyA.style.color = '#ffffff';
    }
    else if (event.keyCode === 39 || event.keyCode === 68) {
        keyD.style.background = '#000000';
        keyD.style.color = '#ffffff';
    }
}


const handlerKeyUp = (event) => {
    if (event.keyCode === 38 || event.keyCode === 87) {
        keyW.style.background = 'rgba(101, 96, 93, .7)';
        keyW.style.color = 'rgba(255, 255, 255, 0.7)';
    }
    else if (event.keyCode === 40 || event.keyCode === 83) {
        keyS.style.background = 'rgba(101, 96, 93, .7)';
        keyS.style.color = 'rgba(255, 255, 255, 0.7)';
    }
    else if (event.keyCode === 37 || event.keyCode === 65) {
        keyA.style.background = 'rgba(101, 96, 93, .7)';
        keyA.style.color = 'rgba(255, 255, 255, 0.7)';
    }
    else if (event.keyCode === 39 || event.keyCode === 68) {
        keyD.style.background = 'rgba(101, 96, 93, .7)';
        keyD.style.color = 'rgba(255, 255, 255, 0.7)';
    }
}
