

class Car{

    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log("You drive the", this.model);
    }

    break(){
        console.log("You step on the",this.model + "'s brakes!");
    }

}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.break();