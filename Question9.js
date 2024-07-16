/*Write a function that filters out even numbers from an array.*/

const filterEvenNumbers = (arr) => {
  return arr.filter((num) => num % 2 !== 0);
};

const filtered = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(filtered); // [1, 3, 5, 7, 9]