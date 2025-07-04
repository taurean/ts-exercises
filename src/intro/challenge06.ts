/*
 ** Challenge 6
 **
 ** Create a function `letterExists` that takes a word (string) and
 ** a character (string), and console.logs whether that letter
 ** can be found inside that word.
 **
 */

export const letterExists = (word: string, character: string) => {
    return word.indexOf(character) >= 0;
};
