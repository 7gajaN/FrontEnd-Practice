

let numbers = [3,14,1,2,5];

numbers.sort(); // sortat in functie de ascii
console.log(numbers);

// numbers.sort(function(x,y){
//     return x-y;
// });

numbers.sort((x,y) => x-y) //crescator
console.log(numbers);


numbers.sort((x,y) => y-x) //descrescator
console.log(numbers);