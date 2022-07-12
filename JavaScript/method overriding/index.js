


class Vehicle{

    drive(){
        console.log("You drive the vehicle");
    }
}

class Car extends Vehicle{

    drive(){
        console.log("You drive the car");
    }
}

class RaceCar extends Car{

    drive(){
        console.log("You drive the racecar!!!!!!");
    }
}


let car = new Car();
let racecar = new RaceCar();

car.drive();
racecar.drive();