var rocketView = function () {
    var displayRocketOne = document.createElement('p');
    displayRocketOne.textContent = "Rocket " + rocketOne.code + ": \n    " + JSON.stringify(rocketOne.thrusters[0]).replace('{"maxPower":', '').split('}') + "  \n    " + JSON.stringify(rocketOne.thrusters[1]).replace('{"maxPower":', '').split('}') + "  \n    " + JSON.stringify(rocketOne.thrusters[2]).replace('{"maxPower":', '').replace('}', '.');
    document.body.appendChild(displayRocketOne);
    var displayRocketTwo = document.createElement('p');
    displayRocketTwo.textContent = "Rocket " + rocketTwo.code + ":\n    " + JSON.stringify(rocketTwo.thrusters[0]).replace('{"maxPower":', '').split('}') + "  \n    " + JSON.stringify(rocketTwo.thrusters[1]).replace('{"maxPower":', '').split('}') + "  \n    " + JSON.stringify(rocketTwo.thrusters[2]).replace('{"maxPower":', '').split('}') + "\n    " + JSON.stringify(rocketTwo.thrusters[3]).replace('{"maxPower":', '').split('}') + "\n    " + JSON.stringify(rocketTwo.thrusters[4]).replace('{"maxPower":', '').split('}') + "\n    " + JSON.stringify(rocketTwo.thrusters[5]).replace('{"maxPower":', '').replace('}', '.');
    document.body.appendChild(displayRocketTwo);
};
rocketView();
