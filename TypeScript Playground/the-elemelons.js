var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        var _newTarget = this.constructor;
        if (_newTarget === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Water";
        return _this;
    }
    Watermelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Watermelon.prototype.toString = function () {
        return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex();
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Fire";
        return _this;
    }
    Firemelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Firemelon.prototype.toString = function () {
        return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex();
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Earth";
        return _this;
    }
    Earthmelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Earthmelon.prototype.toString = function () {
        return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex();
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Air";
        return _this;
    }
    Airmelon.prototype.elementIndex = function () {
        return this.weight * this.melonSort.length;
    };
    Airmelon.prototype.toString = function () {
        return "Element: " + this.element + "\nSort: " + this.melonSort + "\nElement Index: " + this.elementIndex();
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Melolemonmelon.prototype.morph = function () {
        if (this.element === "Water") {
            this.element = "Fire";
        }
        else if (this.element === "Fire") {
            this.element = "Earth";
        }
        else if (this.element === "Earth") {
            this.element = "Air";
        }
        else {
            this.element = "Water";
        }
    };
    return Melolemonmelon;
}(Watermelon));
var test = new Melon(100, "Test");
//Throws error
var watermelon = new Watermelon(15.6, "King size");
console.log(watermelon.toString());
var firemelon = new Firemelon(12.5, "Queen size");
console.log(firemelon.toString());
var airmelon = new Airmelon(11.5, "Princess size");
console.log(airmelon.toString());
var earthmelon = new Earthmelon(7.8, "Kid size");
console.log(earthmelon.toString());
var melolemonmelon = new Melolemonmelon(22.8, "Palate size");
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
