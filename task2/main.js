const strWithVowel = ["a", "e", "i", "o", "u"];

const myFunc = (e) => {
  const vowels = strWithVowel.join('');
  const regex = new RegExp([{vowels}], 'gi');
  const result = e.replace(regex, '');
  return result;
}

console.log(myFunc('Hello world!')); // Output: Hll wrld!
console.log(myFunc('Goodbye world!')) // Output: Gdywrld!