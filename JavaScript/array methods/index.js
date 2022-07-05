//for each method

let total = 0;
let cart = [5, 6, 7, 8, 9];

function checkOut(element, index, array){
    total += element;
}

cart.forEach(checkOut); // callback function
console.log("Your total is: $"+ total);

//map method

let storeUSD = [5, 6, 7, 8, 9];

function toEuros(value){
    value = value*0.85;
    return value;
}

let storeEUR = storeUSD.map(toEuros);
console.log(storeUSD);
console.log(storeEUR);

//filter method

let students = [16,17,18,19,20];

function checkAge(age){
    if(age>=18)
    return age;
}

let adultStudents = students.filter(checkAge);
console.log(adultStudents);


//reduce method

let letters = ["H","E","L","P"];

function combineLetters(total, nextLetter, index, array){
    return total + nextLetter;
}

let word = letters.reduce(combineLetters);

console.log(word);