var rocketView = function () {
    var displayRocketOne = document.createElement('p');
    displayRocketOne.textContent = "Rocket " + rocketOne.code + " has " + thrustersRocketOne.amount + " thrusters with a maximum power of " + thrustersRocketOne.maxPower + ".";
    document.body.appendChild(displayRocketOne);
    var displayRocketTwo = document.createElement('p');
    displayRocketTwo.textContent = "Rocket " + rocketTwo.code + " has " + thrustersRocketTwo.amount + " thrusters with a maximum power of " + thrustersRocketTwo.maxPower + ".";
    document.body.appendChild(displayRocketTwo);
};
rocketView();
