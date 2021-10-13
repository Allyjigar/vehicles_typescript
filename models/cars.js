var Cars = /** @class */ (function () {
    function Cars() {
        this.cars = new Array();
    }
    // constructor(cars: Car[]){
    //     this.cars = cars;
    // }
    Cars.prototype.addCar = function (car) {
        this.cars.push(car);
    };
    return Cars;
}());
