

let firstName = "Ionut";
let lastName = "Florin";

//console.log("Hello "+ firstName+ " " + lastName+ "!");
console.log(`Hello ${firstName} ${lastName}!`);


let price = 10;
let taxRate = 0.05;
let total;


console.log(`The price is: $${price}`);
console.log(`The tax rate is: ${taxRate}`);
console.log(`Tax is $${price*taxRate}`);
console.log(`Total is $${total=price+ price*taxRate}`);