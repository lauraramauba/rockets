class Rocket {
    code: string;
    thrusters:Thruster[]=new Array();

    constructor(code:string) {
        this.code = code;
    }

    addThruster(power:number){
        this.thrusters.push(new Thruster(power));
    }

    accelerate() {
        for (let i = 0; i < this.thrusters.length; i++) {
            console.log(this.thrusters[i].accelerate(10));
        }
    }

    brake() {

        for (let i = 0; i < this.thrusters.length; i++) {
            console.log(this.thrusters[i].brake(10));
        }

    }

    currentSpeed() {
        let total = 0;
        for (let i = 0; i < this.thrusters.length; i++) {
            total += this.thrusters[i].currentPower;
        }
        return total;
    }

    powerPercentage() {
        let totalMaxPower = 0;
        for (let i = 0; i < this.thrusters.length; i++) {
            totalMaxPower += this.thrusters[i].maxPower;
        }//sum of maxPower of all thrusters

        return (this.currentSpeed() * 100 / totalMaxPower);
    }
}

class Thruster {
    maxPower: number;
    currentPower: number = 0;

    constructor(maxPower:number) {
        this.maxPower = maxPower;
    }

    accelerate(power:number) {
        this.currentPower += power;
        if( this.currentPower > this.maxPower) {
            this.currentPower = this.maxPower;
        } 
        return this.currentPower;
    }

    brake(power:number) {
        this.currentPower -= power;
        if(this.currentPower < 0) {
            this.currentPower = 0;
        }
        return this.currentPower;
    }
}