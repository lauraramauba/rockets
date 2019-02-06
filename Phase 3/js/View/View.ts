//SHOW ROCKETS AND ALL ROCKETS SPEED BUTTON

let makeGreen = document.getElementById("make-green-btn");
let makeRed = document.getElementById("make-red-btn");
let allRocketsBtn = document.getElementById("allRocketsSpeed");
let greenInfo = document.getElementById("rocket-one-info");
let redInfo = document.getElementById("rocket-two-info");
let greenBtnInfo = document.getElementById("green-btn-info");
let redBtnInfo = document.getElementById("red-btn-info");
let btnAllInfo = document.getElementById("allRocketsSpeed");
let greenInfoContainer = document.getElementById("green-info-container");
let redInfoContainer = document.getElementById("red-info-container");
let greenAccelerate = document.getElementById("green-accelerate");
let greenBrake = document.getElementById("green-brake");
let redAccelerate = document.getElementById("red-accelerate");
let redBrake = document.getElementById("red-brake");

makeGreen.addEventListener('click', () => {
    makeGreen.classList.add('hide');
    document.getElementById("rocket-one").classList.remove('hide');
    showAllRocketsSpeed();
});

makeRed.addEventListener('click', () => {
    makeRed.classList.add('hide');
    document.getElementById("rocket-two").classList.remove('hide');
    showAllRocketsSpeed();
});

function showAllRocketsSpeed() {
    if(makeGreen.classList.contains('hide') && makeRed.classList.contains('hide')) {
        allRocketsBtn.classList.remove('hide');
    }
}

//SHOW SPEED

greenBtnInfo.onclick = function() {
    if(greenInfoContainer.classList.contains('hide')) {
        greenInfoContainer.classList.remove('hide');
        greenBtnInfo.textContent = `Hide Speed`;
        greenInfo.textContent = `${rocketOne.currentSpeed()} power`;
    } else {
        greenInfoContainer.classList.add('hide');
        greenBtnInfo.textContent = `Show Speed`;
    }
}

redBtnInfo.onclick = function() {
    if(redInfoContainer.classList.contains('hide')) {
        redInfoContainer.classList.remove('hide');
        redBtnInfo.textContent = `Hide Speed`;
        redInfo.textContent = `${rocketTwo.currentSpeed()} power`;
    } else {
        redInfoContainer.classList.add('hide');
        redBtnInfo.textContent = `Show Speed`;
    }
}

btnAllInfo.onclick = function() {
    if(greenInfoContainer.classList.contains('hide') || redInfoContainer.classList.contains('hide')) {
        greenInfoContainer.classList.remove('hide');
        redInfoContainer.classList.remove('hide');
        greenBtnInfo.textContent = `Hide Speed`;
        redBtnInfo.textContent = `Hide Speed`;
        greenInfo.textContent = `${rocketOne.currentSpeed()} power`;
        redInfo.textContent = `${rocketTwo.currentSpeed()} power`;
    } else {
        greenInfoContainer.classList.add('hide');
        redInfoContainer.classList.add('hide');
        greenBtnInfo.textContent = `Show Speed`;
        redBtnInfo.textContent = `Show Speed`;
    }
}

//ACCELERATE, BRAKE AND POWER BAR

greenAccelerate.onclick = function() {
    rocketOne.accelerate();
    greenInfo.textContent = `${rocketOne.currentSpeed()} power`;
    greenPowerBar();
    if (rocketOne.powerPercentage() === 100) {
        greenAccelerate.classList.remove('accelerate-rocket');
        greenAccelerate.classList.add('green-max-accelerate');
    } else if (greenBrake.classList.contains('green-max-brake')) {
        greenBrake.classList.remove('green-max-brake');
        greenBrake.classList.add('brake-rocket');
    }
}   

greenBrake.onclick = function() {
    rocketOne.brake();
    greenInfo.textContent = `${rocketOne.currentSpeed()} power`;
    greenPowerBar();
    if(greenAccelerate.classList.contains('green-max-accelerate')) {
        greenAccelerate.classList.remove('green-max-accelerate');
        greenAccelerate.classList.add('accelerate-rocket');
    } else if(rocketOne.powerPercentage() === 0) {
        greenBrake.classList.remove('brake-rocket');
        greenBrake.classList.add('green-max-brake');
    }
}

redAccelerate.onclick = function() {
    rocketTwo.accelerate();
    redInfo.textContent = `${rocketTwo.currentSpeed()} power`;
    redPowerBar();
    if (rocketTwo.powerPercentage() === 100) {
        redAccelerate.classList.remove('accelerate-rocket');
        redAccelerate.classList.add('red-max-accelerate');
    } else if (redBrake.classList.contains('red-max-brake')) {
        redBrake.classList.remove('red-max-brake');
        redBrake.classList.add('brake-rocket');
    }
}

redBrake.onclick = function() {
    rocketTwo.brake();
    redInfo.textContent = `${rocketTwo.currentSpeed()} power`;
    redPowerBar();
    if(redAccelerate.classList.contains('red-max-accelerate')) {
        redAccelerate.classList.remove('red-max-accelerate');
        redAccelerate.classList.add('accelerate-rocket');
    } else if(rocketTwo.powerPercentage() === 0) {
        redBrake.classList.remove('brake-rocket');
        redBrake.classList.add('red-max-brake');
    }
}