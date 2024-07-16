/*
Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

Example:
Input: "1+2+3-4"
Output: 2
*/

const arithmetic = (str) => {
  let output = 0;
  let lastSign = 1,
    curr = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] == "-") {
      output += lastSign * curr;
      curr = 0;
      lastSign = str[i] === "+" ? 1 : -1;
    } else {
      curr = curr * 10 + parseInt(str[i]);
    }
  }
  output += lastSign * curr;
  return output;
};

console.log(arithmetic("1+42+3-14")); // 32
