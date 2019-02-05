//SHOW ROCKETS AND ALL ROCKETS SPEED BUTTON
var makeGreen = document.getElementById("make-green-btn");
var makeRed = document.getElementById("make-red-btn");
var allRocketsBtn = document.getElementById("allRocketsSpeed");
function showRocketOne() {
    makeGreen.classList.add('hide');
    document.getElementById("rocket-one").classList.remove('hide');
    showAllRocketsSpeed();
}
function showRocketTwo() {
    makeRed.classList.add('hide');
    document.getElementById("rocket-two").classList.remove('hide');
    showAllRocketsSpeed();
}
function showAllRocketsSpeed() {
    if (makeGreen.classList.contains('hide') && makeRed.classList.contains('hide')) {
        allRocketsBtn.classList.remove('hide');
    }
}
makeGreen.addEventListener('click', showRocketOne);
makeRed.addEventListener('click', showRocketTwo);
//SHOW SPEED
var greenInfo = document.getElementById("rocket-one-info");
var redInfo = document.getElementById("rocket-two-info");
var greenBtnInfo = document.getElementById("green-btn-info");
var redBtnInfo = document.getElementById("red-btn-info");
var btnAllInfo = document.getElementById("allRocketsSpeed");
var greenInfoContainer = document.getElementById("green-info-container");
var redInfoContainer = document.getElementById("red-info-container");
greenBtnInfo.onclick = function () {
    if (greenInfoContainer.classList.contains('hide')) {
        greenInfoContainer.classList.remove('hide');
        greenBtnInfo.textContent = "Hide Speed";
        greenInfo.textContent = rocketOne.currentSpeed() + " power";
    }
    else {
        greenInfoContainer.classList.add('hide');
        greenBtnInfo.textContent = "Show Speed";
    }
};
redBtnInfo.onclick = function () {
    if (redInfoContainer.classList.contains('hide')) {
        redInfoContainer.classList.remove('hide');
        redBtnInfo.textContent = "Hide Speed";
        redInfo.textContent = rocketTwo.currentSpeed() + " power";
    }
    else {
        redInfoContainer.classList.add('hide');
        redBtnInfo.textContent = "Show Speed";
    }
};
btnAllInfo.onclick = function () {
    if (greenInfoContainer.classList.contains('hide') || redInfoContainer.classList.contains('hide')) {
        greenInfoContainer.classList.remove('hide');
        redInfoContainer.classList.remove('hide');
        greenBtnInfo.textContent = "Hide Speed";
        redBtnInfo.textContent = "Hide Speed";
        greenInfo.textContent = rocketOne.currentSpeed() + " power";
        redInfo.textContent = rocketTwo.currentSpeed() + " power";
    }
    else {
        greenInfoContainer.classList.add('hide');
        redInfoContainer.classList.add('hide');
        greenBtnInfo.textContent = "Show Speed";
        redBtnInfo.textContent = "Show Speed";
    }
};
//ACCELERATE, BRAKE AND POWER BAR
var greenAccelerate = document.getElementById("green-accelerate");
var greenBrake = document.getElementById("green-brake");
var redAccelerate = document.getElementById("red-accelerate");
var redBrake = document.getElementById("red-brake");
greenAccelerate.onclick = function () {
    rocketOne.accelerate();
    greenInfo.textContent = rocketOne.currentSpeed() + " power";
    greenPowerBar();
    if (rocketOne.powerPercentage() === 100) {
        greenAccelerate.classList.remove('accelerate-rocket');
        greenAccelerate.classList.add('green-max-accelerate');
    }
    else if (greenBrake.classList.contains('green-max-brake')) {
        greenBrake.classList.remove('green-max-brake');
        greenBrake.classList.add('brake-rocket');
    }
};
greenBrake.onclick = function () {
    rocketOne.brake();
    greenInfo.textContent = rocketOne.currentSpeed() + " power";
    greenPowerBar();
    if (greenAccelerate.classList.contains('green-max-accelerate')) {
        greenAccelerate.classList.remove('green-max-accelerate');
        greenAccelerate.classList.add('accelerate-rocket');
    }
    else if (rocketOne.powerPercentage() === 0) {
        greenBrake.classList.remove('brake-rocket');
        greenBrake.classList.add('green-max-brake');
    }
};
redAccelerate.onclick = function () {
    rocketTwo.accelerate();
    redInfo.textContent = rocketTwo.currentSpeed() + " power";
    redPowerBar();
    if (rocketTwo.powerPercentage() === 100) {
        redAccelerate.classList.remove('accelerate-rocket');
        redAccelerate.classList.add('red-max-accelerate');
    }
    else if (redBrake.classList.contains('red-max-brake')) {
        redBrake.classList.remove('red-max-brake');
        redBrake.classList.add('brake-rocket');
    }
};
redBrake.onclick = function () {
    rocketTwo.brake();
    redInfo.textContent = rocketTwo.currentSpeed() + " power";
    redPowerBar();
    if (redAccelerate.classList.contains('red-max-accelerate')) {
        redAccelerate.classList.remove('red-max-accelerate');
        redAccelerate.classList.add('accelerate-rocket');
    }
    else if (rocketTwo.powerPercentage() === 0) {
        redBrake.classList.remove('brake-rocket');
        redBrake.classList.add('red-max-brake');
    }
};
