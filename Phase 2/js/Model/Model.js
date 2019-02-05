var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
    }
    Rocket.prototype.addThruster = function (power) {
        this.thrusters.push(new Thruster(power));
    };
    return Rocket;
}());
var Thruster = /** @class */ (function () {
    function Thruster(maxPower) {
        this.maxPower = maxPower;
    }
    return Thruster;
}());
