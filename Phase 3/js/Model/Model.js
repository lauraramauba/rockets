var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.thrusters = new Array();
        this.code = code;
    }
    Rocket.prototype.addThruster = function (power) {
        this.thrusters.push(new Thruster(power));
    };
    Rocket.prototype.accelerate = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            console.log(this.thrusters[i].accelerate(10));
        }
    };
    Rocket.prototype.brake = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            console.log(this.thrusters[i].brake(10));
        }
    };
    Rocket.prototype.currentSpeed = function () {
        var total = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            total += this.thrusters[i].currentPower;
        }
        return total;
    };
    Rocket.prototype.powerPercentage = function () {
        var totalMaxPower = 0;
        for (var i = 0; i < this.thrusters.length; i++) {
            totalMaxPower += this.thrusters[i].maxPower;
        } //sum of maxPower of all thrusters
        return (this.currentSpeed() * 100 / totalMaxPower);
    };
    return Rocket;
}());
var Thruster = /** @class */ (function () {
    function Thruster(maxPower) {
        this.currentPower = 0;
        this.maxPower = maxPower;
    }
    Thruster.prototype.accelerate = function (power) {
        this.currentPower += power;
        if (this.currentPower > this.maxPower) {
            this.currentPower = this.maxPower;
        }
        return this.currentPower;
    };
    Thruster.prototype.brake = function (power) {
        this.currentPower -= power;
        if (this.currentPower < 0) {
            this.currentPower = 0;
        }
        return this.currentPower;
    };
    return Thruster;
}());
