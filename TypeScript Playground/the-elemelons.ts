class Melon {
    weight: number;
    melonSort: string;

    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    element: string

    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Water";
    }

    elementIndex() {
        return this.weight * this.melonSort.length
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`
    }
}

class Firemelon extends Melon {
    element: string

    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Fire";
    }

    elementIndex() {
        return this.weight * this.melonSort.length
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`
    }
}

class Earthmelon extends Melon {
    element: string

    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Earth";
    }

    elementIndex() {
        return this.weight * this.melonSort.length
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`
    }
}

class Airmelon extends Melon {
    element: string

    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Air";
    }

    elementIndex() {
        return this.weight * this.melonSort.length
    }

    toString() {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex()}`
    }
}

class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }

    morph() {
        if (this.element === "Water") {
            this.element = "Fire";
        } else if (this.element === "Fire") {
            this.element = "Earth";
        } else if (this.element === "Earth") {
            this.element = "Air";
        } else {
            this.element = "Water";
        }
    }
}


//let test: Melon = new Melon(100, "Test");
//Throws error

let watermelon: Watermelon = new Watermelon(15.6, "King size");
console.log(watermelon.toString());
let firemelon: Firemelon = new Firemelon(12.5, "Queen size");
console.log(firemelon.toString());
let airmelon: Airmelon = new Airmelon(11.5, "Princess size");
console.log(airmelon.toString());
let earthmelon: Earthmelon = new Earthmelon(7.8, "Kid size");
console.log(earthmelon.toString());
let melolemonmelon: Melolemonmelon = new Melolemonmelon(22.8, "Palate size");
console.log(melolemonmelon.toString());

//Element: Water
// Sort: King size
// Element Index: 140.4
// Element: Fire
// Sort: Queen size
// Element Index: 125
// Element: Air
// Sort: Princess size
// Element Index: 149.5
// Element: Earth
// Sort: Kid size
// Element Index: 62.4
// Element: Water
// Sort: Palate size
// Element Index: 250.8
