class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            // implement card text here
            if (this.stat == "resilience") {
                target.resilience += this.magnitude;
            } else {
                target.power += this.magnitude;
            }
            console.log(this.text);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

// Make an instance of Unit called "Red Belt Ninja"
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

// Make an instance of Unit called "Black Belt Ninja"
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja);

// Make an instance of Effect called "Hard Algorithm"
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);

// Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
hardAlgorithm.play(redBeltNinja);

// Make an instance of Effect called "Unhandled Promise Rejection"
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
unhandledPromiseRejection.play(redBeltNinja);

// Make an instance of Effect called "Pair Programming"
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
pairProgramming.play(redBeltNinja);

console.log(redBeltNinja);
console.log(blackBeltNinja);

