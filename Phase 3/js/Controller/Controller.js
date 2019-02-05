var rocketOne = new Rocket("32WESSDS");
rocketOne.addThruster(10);
rocketOne.addThruster(30);
rocketOne.addThruster(80);
var rocketTwo = new Rocket("LDSFJA32");
rocketTwo.addThruster(30);
rocketTwo.addThruster(40);
rocketTwo.addThruster(50);
rocketTwo.addThruster(50);
rocketTwo.addThruster(30);
rocketTwo.addThruster(10);
//POWER BAR FUNCTION
function clearBars(id, percentage, toAdd) {
    setBarOne(id, 1, false);
    setBarTwo(id, 2, false);
    setBarThree(id, 3, false);
    setBarFour(id, 4, false);
    setBarFive(id, 5, false);
    setBarSix(id, 6, false);
    setBarSeven(id, 7, false);
    setBarEight(id, 8, false);
    setBarNine(id, 9, false);
    setBarTen(id, 10, false);
}
function setBarOne(id, percentage, toAdd) {
    if (percentage < 1)
        return;
    if (toAdd) {
        document.getElementById(id + "1").classList.add('green');
    }
    else {
        document.getElementById(id + "1").classList.remove('green');
    }
}
function setBarTwo(id, percentage, toAdd) {
    if (percentage < 2)
        return;
    if (toAdd) {
        document.getElementById(id + "2").classList.add('green-two');
    }
    else {
        document.getElementById(id + "2").classList.remove('green-two');
    }
}
function setBarThree(id, percentage, toAdd) {
    if (percentage < 3)
        return;
    if (toAdd) {
        document.getElementById(id + "3").classList.add('green-three');
    }
    else {
        document.getElementById(id + "3").classList.remove('green-three');
    }
}
function setBarFour(id, percentage, toAdd) {
    if (percentage < 4)
        return;
    if (toAdd) {
        document.getElementById(id + "4").classList.add('green-four');
    }
    else {
        document.getElementById(id + "4").classList.remove('green-four');
    }
}
function setBarFive(id, percentage, toAdd) {
    if (percentage < 5)
        return;
    if (toAdd) {
        document.getElementById(id + "5").classList.add('green-yellow');
    }
    else {
        document.getElementById(id + "5").classList.remove('green-yellow');
    }
}
function setBarSix(id, percentage, toAdd) {
    if (percentage < 6)
        return;
    if (toAdd) {
        document.getElementById(id + "6").classList.add('yellow');
    }
    else {
        document.getElementById(id + "6").classList.remove('yellow');
    }
}
function setBarSeven(id, percentage, toAdd) {
    if (percentage < 7)
        return;
    if (toAdd) {
        document.getElementById(id + "7").classList.add('yellow-orange');
    }
    else {
        document.getElementById(id + "7").classList.remove('yellow-orange');
    }
}
function setBarEight(id, percentage, toAdd) {
    if (percentage < 8)
        return;
    if (toAdd) {
        document.getElementById(id + "8").classList.add('orange');
    }
    else {
        document.getElementById(id + "8").classList.remove('orange');
    }
}
function setBarNine(id, percentage, toAdd) {
    if (percentage < 9)
        return;
    if (toAdd) {
        document.getElementById(id + "9").classList.add('orange-red');
    }
    else {
        document.getElementById(id + "9").classList.remove('orange-red');
    }
}
function setBarTen(id, percentage, toAdd) {
    if (percentage < 10)
        return;
    if (toAdd) {
        document.getElementById(id + "10").classList.add('red');
    }
    else {
        document.getElementById(id + "10").classList.remove('red');
    }
}
function greenPowerBar() {
    var percentage = Math.round(rocketOne.powerPercentage() / 10);
    clearBars("greenBar", percentage, false);
    setBarOne("greenBar", percentage, true);
    setBarTwo("greenBar", percentage, true);
    setBarThree("greenBar", percentage, true);
    setBarFour("greenBar", percentage, true);
    setBarFive("greenBar", percentage, true);
    setBarSix("greenBar", percentage, true);
    setBarSeven("greenBar", percentage, true);
    setBarEight("greenBar", percentage, true);
    setBarNine("greenBar", percentage, true);
    setBarTen("greenBar", percentage, true);
}
function redPowerBar() {
    var percentage = Math.round(rocketTwo.powerPercentage() / 10);
    clearBars("redBar", percentage, false);
    setBarOne("redBar", percentage, true);
    setBarTwo("redBar", percentage, true);
    setBarThree("redBar", percentage, true);
    setBarFour("redBar", percentage, true);
    setBarFive("redBar", percentage, true);
    setBarSix("redBar", percentage, true);
    setBarSeven("redBar", percentage, true);
    setBarEight("redBar", percentage, true);
    setBarNine("redBar", percentage, true);
    setBarTen("redBar", percentage, true);
}
