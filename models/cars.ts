class Cars {
    cars: Car[] = new Array();

    // constructor(cars: Car[]){
    //     this.cars = cars;
    // }

    addCar(car:Car):void{
        this.cars.push(car);
    }


}