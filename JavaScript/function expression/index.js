

//function declaration

sayHello();

function sayHello(){
    console.log("Hello");
}


//function expression

//let greeting = function(){ console.log("Hello")};
//let greeting = function(){ document.getElementById("myH1").innerHTML="Hello"};

let greeting = "Hello";

outputConsole(greeting);
outputWebsite(greeting);


function outputConsole(x){
    console.log(x);
}

function outputWebsite(x){
    document.getElementById("myH1").innerHTML=x;
}