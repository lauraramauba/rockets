function rocketView() {
    var displayRocketOne = document.createElement('p');
    displayRocketOne.textContent = "Rocket " + rocketOne.code + " has " + rocketOne.thrusters + " thrusters.";
    document.body.appendChild(displayRocketOne);
    var displayRocketTwo = document.createElement('p');
    displayRocketTwo.textContent = "Rocket " + rocketTwo.code + " has " + rocketTwo.thrusters + " thrusters.";
    document.body.appendChild(displayRocketTwo);
}
rocketView();
