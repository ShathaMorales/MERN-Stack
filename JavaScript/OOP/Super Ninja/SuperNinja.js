class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name);
        console.log(this.speed);
        console.log(this.strength);
        console.log(this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}

let ninja1 = new Ninja('Ninja1', 10);
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"