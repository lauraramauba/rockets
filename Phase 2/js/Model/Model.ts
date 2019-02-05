class Rocket {
    code: string;
    thrusters:Thruster[]=new Array();

    constructor(code:string) {
        this.code = code;
    }

    addThruster(power:number){
        this.thrusters.push(new Thruster(power));
    }
}

class Thruster {
    maxPower: number;

    constructor(maxPower:number) {
        this.maxPower = maxPower;
    }
}