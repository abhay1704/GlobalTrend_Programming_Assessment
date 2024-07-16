/*Write a function that checks if two given strings are anagrams of each other.
 */

const isAnagram = (str1, str2) => {
  // initialise an array of 52 elements to store the count of each letter
  const letterHash = new Array(52);
  letterHash.fill(0);

  // Upadate letterhash with the first string
  for (const c of str1) {
    const index =
      c >= "a"
        ? c.charCodeAt(0) - "a".charCodeAt(0)
        : c.charCodeAt(0) - "A".charCodeAt(0) + 26;
    letterHash[index]++;
  }

  // Update letterhash with the second string
  for (const c of str2) {
    const index =
      c >= "a"
        ? c.charCodeAt(0) - "a".charCodeAt(0)
        : c.charCodeAt(0) - "A".charCodeAt(0) + 26;
    letterHash[index]--;
  }

  // Check if the letterHash is all zeros
  return letterHash.every((val) => val === 0);
};

console.log(isAnagram("Global", "lobGal")); // true
