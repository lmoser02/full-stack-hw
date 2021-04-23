
let calculateChange = (input) => {
  // Add your code hereA
  dollars = 0;
  quarters = 0;
  dimes = 0;
  nickels = 0;
  pennies = 0;
  saved = input;

    if(input > 10){
      return "Error: Number is too large."
    }
    input = input * 100
      
    dollars = Math.floor(input/100);
    input = input%100;

    quarters = Math.floor(input/25);
    input = input%25;

    dimes = Math.floor(input/10);
    input = input%10;

    nickels = Math.floor(input/5);
    input = input%5;

    pennies = input;

    return "$"+ saved + " ==> " + dollars + " dollars, " + " " + quarters + " quarters, " + " " + dimes + " dimes, " + " " + nickels + " nickels, " + " " + pennies + " pennies";
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.72 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
