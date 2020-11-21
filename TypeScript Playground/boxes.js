var Box = /** @class */ (function () {
    function Box() {
        this.array = [];
    }
    Box.prototype.add = function (el) {
        this.array.push(el);
    };
    Box.prototype.remove = function () {
        this.array.shift();
    };
    Box.prototype.count = function () {
        return this.array.length;
    };
    return Box;
}());
var boxOne = new Box();
boxOne.add(1);
boxOne.add(2);
boxOne.add(3);
console.log(boxOne.count());
var boxTwo = new Box();
boxTwo.add("Pesho");
boxTwo.add("Gosho");
console.log(boxTwo.count());
boxTwo.remove();
console.log(boxTwo.count());
