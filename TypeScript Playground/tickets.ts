function solve(destinations, sortArg) {
    let allDestinations = [];
    for (const destination of destinations) {
        let [dest, price, status] = destination.split('|');
        price = Number(price);
        allDestinations.push(new Tickets(dest, price, status));
    }
    if (sortArg === 'price') {
        return allDestinations.sort(function (a, b) {
            return a.price - b.price;
        })
    }
    return allDestinations.sort(function (a, b) {
        return a[sortArg].localeCompare(b[sortArg]);
    })

}

class Tickets {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

const arr = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
]
const sortOne = 'destination';
const sortTwo = 'status';
const sortThree = 'price';

console.log(solve(arr, sortOne))
console.log(solve(arr, sortTwo))
console.log(solve(arr, sortThree))
