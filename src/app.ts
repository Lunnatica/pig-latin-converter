const isUpperCase = (letter: string) => letter.toLowerCase() !== letter;

const isVowel = (letter: string) => {
  const lowerCaseLetter = letter.toLowerCase();
  if (
    lowerCaseLetter === "a" ||
    lowerCaseLetter === "e" ||
    lowerCaseLetter === "i" ||
    lowerCaseLetter === "o" ||
    lowerCaseLetter === "u"
  )
    return true;
  else return false;
};

const convertToPigLatinWord = (word: string) => {
  let finalStr = "";
  const indices = new Set();
  for (let i = 0; i < word.length; i++) {
    if (isUpperCase(word[i])) indices.add(i);
  }

  if (isVowel(word[0])) {
    finalStr = word + "yay";
  } else {
    let tempStr = "";
    let chosenIndex = 0;

    for (let i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
        chosenIndex = i;
        break;
      } else {
        tempStr += word[i];
      }
    }

    finalStr =
      word.substring(chosenIndex) + word.substring(0, chosenIndex) + "ay";
  }

  if (indices.size === 0) return finalStr;
  if (indices.size > 1) {
    return finalStr.toUpperCase();
  } else {
    return finalStr[0].toUpperCase() + finalStr.substring(1).toLowerCase();
  }
};

export const convertToPigLatin = (initialStr: string) => {
  const allWords = initialStr.split(" ");

  const pigLatinWords = allWords.map((word) => convertToPigLatinWord(word));

  return pigLatinWords.join(" ");
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Enter a string to convert to Pig Latin: ",
  (input: string) => {
    console.log(convertToPigLatin(input));
    readline.close();
  }
);
