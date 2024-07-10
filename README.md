# Pig latin converter

Pig latin converter.

Pig Latin is a language game played by children that alters words by rearranging them into a coded language. The rules are:

- For words that begin with a consonant, move all letters before the first vowel (a, e, i, o, u) to the end and append “ay” as the suffix.

Examples:

"pig" = "igpay"
"latin" = "atinlay"
"smile" = "ilesmay"
"floor"= "oorflay"
"string" = "ingstray"

- For words that begin with a vowel, leave the vowel in place and append “yay” as the suffix.

Examples:

"egg" = "eggyay"
"explain" = "explainyay"
"I"= "Iyay"

- The function should match the letter casing of the original sentence with the encoded sentence. For example, if the word “Pig” is passed, then “Igpay” should be returned. If the word “LATIN” is passed then “ATINLAY” should be returned.

### To run the app, use:

`ts-node ./src/app.ts`

### To run the tests:

`npm run test`
