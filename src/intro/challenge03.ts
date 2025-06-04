/*
 ** Challenge 3
 **
 ** Create a function `lastLetter` that takes a word (string) and console.logs the last
 ** character/letter of that word.
 **
 ** Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []
 **
 */

export const lastLetter = (word: string) => {
    return word.slice(-1);
};
