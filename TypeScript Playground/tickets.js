function solve(destinations, sortArg) {
    var allDestinations = [];
    for (var _i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
        var destination = destinations_1[_i];
        var _a = destination.split('|'), dest = _a[0], price = _a[1], status_1 = _a[2];
        price = Number(price);
        allDestinations.push(new Tickets(dest, price, status_1));
    }
    if (sortArg === 'price') {
        return allDestinations.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    return allDestinations.sort(function (a, b) {
        return a[sortArg].localeCompare(b[sortArg]);
    });
}
var Tickets = /** @class */ (function () {
    function Tickets(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Tickets;
}());
var arr = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var sortOne = 'destination';
var sortTwo = 'status';
var sortThree = 'price';
console.log(solve(arr, sortOne));
console.log(solve(arr, sortTwo));
console.log(solve(arr, sortThree));
