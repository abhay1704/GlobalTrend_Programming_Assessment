/*Write a function that takes a string and capitalizes the first letter of each word in the string*/

const capitaliseEachWord = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(capitaliseEachWord("hello amazing world")); // Hello Amazing World