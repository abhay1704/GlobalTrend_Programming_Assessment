/* Write a function that converts a given string to title case (capitalizing the first letter of each word). */

const titleCase = (str) => {
    return str
        .split(" ")
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
        })
        .join(" ");
};

console.log(titleCase("hello amaZiNg world")); // Hello Amazing World
    