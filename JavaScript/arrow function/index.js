

let hello;
let x = "yo";
let y = "Ionut"

//function expression
hello = function(x, y){
    console.log(x);
    console.log(y);
}
hello(x,y);

//arrow function
hello = (x, y) => {
    console.log(x);
    console.log(y);
}
hello(x,y);

/*________________________________________*/

let storeUSD = [5,6,7,8,9];
let storeEUR;

function toEuros(value){

    value = value*0.84;
    return value;
}

storeEUR = storeUSD.map(value => value = value*0.84); // la fel ca mai jos doar ca nu se foloseste de callback function
//storeEUR = storeUSD.map(toEuros);
console.log(storeEUR);

/*________________________________________*/

let students = [16,17,18,19,20];
let adultStudents;

function checkAge(age){

    if(age >= 18){
        return age;
    }
}


adultStudents = students.filter(age => age >= 18);
//adultStudents = students.filter(checkAge);
console.log(adultStudents);

/*________________________________________*/

let letters = ["H","E", "L", "P"];
let word;

function combineLetters(total, nextLetter){

    return total + nextLetter;
}


word = letters.reduce((total, nextLetter) => total + nextLetter);
//word = letters.reduce(combineLetters);
console.log(word);