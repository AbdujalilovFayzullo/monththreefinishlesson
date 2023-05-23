const test = "hello world such as like";

const replaceVowels = (text) => {
  const vowelsA = ['a'];
  const vowelsStar = ['u', 'i', 'o', 'e'];

  let replacedText = text;
  vowelsA.forEach(vowel => {
    replacedText = replacedText.split(vowel).join('A');
  });

  vowelsStar.forEach(vowel => {
    replacedText = replacedText.split(vowel).join('*');
  });

  return replacedText;
};

console.log(replaceVowels(test)); // Output: h*ll* w*rld s*ch *s l*k*   