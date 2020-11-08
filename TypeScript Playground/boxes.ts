class Box<T> {
    array: T[];

    constructor() {
        this.array = [];
    }

    add(el: T): void {
        this.array.push(el);
    }

    remove(): void {
        this.array.shift();
    }

    count(): number {
        return this.array.length;
    }
}

let boxOne = new Box<Number>();
boxOne.add(1);
boxOne.add(2);
boxOne.add(3);
console.log(boxOne.count());

let boxTwo = new Box<String>();
boxTwo.add("Pesho");
boxTwo.add("Gosho");
console.log(boxTwo.count());
boxTwo.remove();
console.log(boxTwo.count());
