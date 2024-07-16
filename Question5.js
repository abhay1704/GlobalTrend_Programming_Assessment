/*Write a function that takes an array and returns a new array with duplicates removed.*/

const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
