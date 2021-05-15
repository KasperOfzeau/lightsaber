const igniteSound = new Audio('sounds/igniting.mp3');
const powerDown = new Audio('sounds/powerDown.mp3');
const hilt = document.querySelector('.hilt');
const lightsaber = document.querySelector('.lightsaber');
const colorSelecter = document.querySelector('#colors');

const init = () => {
    hilt.addEventListener('click', playIgnite);
    colorSelecter.addEventListener('change', colorSelect);
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

const colorSelect = (e) => {
    lightsaber.id =  e.target.value;
}

init();