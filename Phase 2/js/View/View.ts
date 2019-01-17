
let rocketView = function() {
    let displayRocketOne = document.createElement('p');
    displayRocketOne.textContent = `Rocket ${rocketOne.code}: 
    ${JSON.stringify(rocketOne.thrusters[0]).replace('{"maxPower":', '').split('}')}  
    ${JSON.stringify(rocketOne.thrusters[1]).replace('{"maxPower":', '').split('}')}  
    ${JSON.stringify(rocketOne.thrusters[2]).replace('{"maxPower":', '').replace('}', '.')}`
    document.body.appendChild(displayRocketOne);

    let displayRocketTwo = document.createElement('p');
    displayRocketTwo.textContent = `Rocket ${rocketTwo.code}:
    ${JSON.stringify(rocketTwo.thrusters[0]).replace('{"maxPower":', '').split('}')}  
    ${JSON.stringify(rocketTwo.thrusters[1]).replace('{"maxPower":', '').split('}')}  
    ${JSON.stringify(rocketTwo.thrusters[2]).replace('{"maxPower":', '').split('}')}
    ${JSON.stringify(rocketTwo.thrusters[3]).replace('{"maxPower":', '').split('}')}
    ${JSON.stringify(rocketTwo.thrusters[4]).replace('{"maxPower":', '').split('}')}
    ${JSON.stringify(rocketTwo.thrusters[5]).replace('{"maxPower":', '').replace('}', '.')}`
    document.body.appendChild(displayRocketTwo);
}

rocketView();