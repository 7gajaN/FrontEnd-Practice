



class Animal{


    constructor(){
        this.alive = true;
    }

    eat(){
        console.log("This animal is eating!");
    }
}

class Rabbit extends Animal{

    run(){
        console.log("This rabbit is running!")
    }

}

class Fish extends Animal{


    swin(){
        console.log("This fish is swimming!")
    }
}

class Hawk extends Animal{

    fly(){
        console.log("This hawk is flying!")
    }

}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

rabbit.run();
fish.swin();
hawk.fly();