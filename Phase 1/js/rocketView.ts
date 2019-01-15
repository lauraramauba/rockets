
let rocketView = function() {
    let displayRocketOne = document.createElement('p');
    displayRocketOne.textContent = `Rocket ${rocketOne.code} has thrusters: ${rocketOne.thrusters}.`
    document.body.appendChild(displayRocketOne);

    let displayRocketTwo = document.createElement('p');
    displayRocketTwo.textContent = `Rocket ${rocketTwo.code} has thrusters: ${rocketTwo.thrusters}.`
    document.body.appendChild(displayRocketTwo);
}

rocketView();