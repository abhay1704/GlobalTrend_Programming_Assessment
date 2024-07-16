/*
Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
*/

const fizzBuzz = () => {
  let output = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 3 && i % 5) output += i;
    output += "\n";
    }
    console.log(output);
};

fizzBuzz();
