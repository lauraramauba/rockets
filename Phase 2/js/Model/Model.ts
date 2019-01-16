class Rocket {
    code: string;

    constructor(code:string) {
        this.code = code;
    }
}

class Thrusters {
    amount: number;
    maxPower: any;

    constructor(amount:number, maxPower:any) {
        this.amount = amount;
        this.maxPower = maxPower;
    }
}