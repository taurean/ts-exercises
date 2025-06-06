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
    const vowels = "aeiouyAEIOUY";
    let newStringArray: string[] = [];

    for (let index = 0; index < string.length; index++) {
        const currentCharacter = string.charAt(index);

        if (!vowels.includes(currentCharacter)) {
            newStringArray.push(currentCharacter);
        }
    }

    return newStringArray.join("");
};
