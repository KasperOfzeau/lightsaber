const igniteSound = new Audio('sounds/igniting.mp3');
const powerDown = new Audio('sounds/powerDown.mp3');
const hilt = document.querySelector('.hilt');
const lightsaber = document.querySelector('.lightsaber');
const colorSelecter = document.querySelector('#colors');
const muteButton = document.querySelector('#muteButton');
let volume = 0.2;

const init = () => {
    hilt.addEventListener('click', playIgnite);
    colorSelecter.addEventListener('change', colorSelect);
    muteButton.addEventListener('click', changeVolume);
    igniteSound.volume = volume;
    powerDown.volume = volume;
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
    hilt.classList.add('hover'); // Add hover class
}

const changeVolume = () => {
    if(volume == 0.2) {
        volume = 0;
        igniteSound.volume = volume;
        powerDown.volume = volume;

        muteButton.classList = "";
        muteButton.classList = "fas fa-volume-mute";
    } else {
        volume = 0.2;
        igniteSound.volume = volume;
        powerDown.volume = volume;

        muteButton.classList = "";
        muteButton.classList = "fas fa-volume-up";
    }
}

init();