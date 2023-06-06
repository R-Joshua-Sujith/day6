class UberCalculator {
    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }

    calculatePrice() {
        const baseFare = 2.5;
        const costPerMile = 1.5;
        const costPerMinute = 0.2;
        const distanceCost = this.distance * costPerMile;
        const timeCost = this.time * costPerMinute;
        const totalCost = baseFare + distanceCost + timeCost;
        return totalCost.toFixed(2);
    }

    setDistance(distance) {
        this.distance = distance;
    }

    setTime(time) {
        this.time = time;
    }
}


const ride = new UberCalculator(15, 30); // Distance: 10 miles, Time: 15 minutes
console.log(ride.calculatePrice()); // Output: 31.00

ride.setDistance(5);
ride.setTime(10);
console.log(ride.calculatePrice()); // Output: 12.00
