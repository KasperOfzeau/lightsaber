const igniteSound = new Audio('sounds/igniting.mp3');
const powerDown = new Audio('sounds/powerDown.mp3');
const hilt = document.querySelector('.hilt');

const init = () => {
    hilt.addEventListener('click', playIgnite);
    igniteSound.volume = 0.2;
    powerDown.volume = 0.2;
}

const playIgnite = () => {
    igniteSound.play();
    hilt.removeEventListener('click', playIgnite);
    hilt.addEventListener('click', playPowerDown);
}

const playPowerDown = () => {
    powerDown.play();
    hilt.removeEventListener('click', playPowerDown);
    hilt.addEventListener('click', playIgnite);
}

init();