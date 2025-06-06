/*
 * # Challenge 12
 *
 * create a function `disemvowel` that takes a string and
 * returns a string with all vowels removed
 *
 * */

/**
 * remove all vowels from a string
 * @param {string} string - a string with vowels to be removed
 *
 */

export const disemvowel = (string: string) => {
    let newString = "";

    for (let index = 0; index < string.length; index++) {
        const currentCharacter = string.charAt(index);

        if (
            currentCharacter === "a" ||
            currentCharacter === "A" ||
            currentCharacter === "e" ||
            currentCharacter === "E" ||
            currentCharacter === "i" ||
            currentCharacter === "I" ||
            currentCharacter === "o" ||
            currentCharacter === "O" ||
            currentCharacter === "u" ||
            currentCharacter === "U"
        ) {
            newString = newString;
        } else {
            newString = newString + currentCharacter;
        }
    }

    return newString;
};
