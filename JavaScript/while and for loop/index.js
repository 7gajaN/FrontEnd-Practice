



// var credittNum = window.prompt("Your computer has a virus!! Enter your credit card info!!!")

// while(credittNum == ""){
//     var credittNum = window.prompt("Your computer has a virus!! Enter your credit card info!!!")
// }

// do{
//     var credittNum = window.prompt("Your computer has a virus!! Enter your credit card info!!!")
// }while(credittNum == "")

//     console.log("Your computer no longer has a virus");


// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// for(let i=10; i>0; i--){
//     console.log(i);
// }

//     console.log("Happy new year!");


// let letters = ["H","E","L","P"]


// let Car = {
//     make: "Chevy",
//     model: "Corvette",
//     year: 2022,
//     color: "blue"
// }


// for(let i in letters){
//     console.log(letters[i]);
// }

// for(let property in Car){
//     console.log(Car[property]);
// }

var symbol = window.prompt("Enter a symbol to use");
var rows = window.prompt("Enter a # of rows");
var columns = window.prompt("Enter a # of columns");

for(let i=0;i< rows; i++){
    for(let j =0; j< columns; j++){
        document.getElementById("asd").innerHTML += symbol
    }
    document.getElementById("asd").innerHTML += "<br>";
}