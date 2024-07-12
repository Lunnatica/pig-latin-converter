const isUpperCase = (letter: string) => letter === letter.toUpperCase();

const isVowel = (letter: string) => {
  const lowerCaseLetter = letter.toLowerCase();
  return "aeiou".includes(lowerCaseLetter);
};

const convertVowelWordToPigLatin = (word: string) => {
  return word + "yay";
};

const convertConsonantWordToPigLatin = (word: string) => {
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

  return word.substring(chosenIndex) + tempStr + "ay";
};

const convertSingleWordToPigLatin = (word: string) => {
  let finalStr = "";
  const indicesWithUpperCase = new Set<number>();

  for (let i = 0; i < word.length; i++) {
    if (isUpperCase(word[i])) indicesWithUpperCase.add(i);
  }

  if (isVowel(word[0])) {
    finalStr = convertVowelWordToPigLatin(word);
  } else {
    finalStr = convertConsonantWordToPigLatin(word);
  }

  if (indicesWithUpperCase.size === 0) return finalStr;
  if (indicesWithUpperCase.size > 1) {
    return finalStr.toUpperCase();
  } else {
    return finalStr[0].toUpperCase() + finalStr.substring(1).toLowerCase();
  }
};

export const convertToPigLatin = (initialStr: string) => {
  const allWords = initialStr.split(" ");

  const pigLatinWords = allWords.map((word) =>
    convertSingleWordToPigLatin(word)
  );

  return pigLatinWords.join(" ");
};
