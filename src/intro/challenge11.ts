/*
 * # Challenge 11
 *
 * create a function `longestWord` that returns the longest
 * word of a sentence. If there are ties, the function
 * should return the later word.
 */

/**
 * Find the longest word in a string
 * - returns last if tie
 * - return empty string if sentence is empty
 * @param {string} sentence - a sentence in string form
 */

export const longestWord = (sentence: string) => {
    const lastCharacter = sentence[sentence.length - 1];

    const sentenceArr = sentence.split(" ");

    if (
        lastCharacter === "." ||
        lastCharacter === "?" ||
        lastCharacter === "!"
    ) {
        const modifiedLastWord = sentenceArr[sentenceArr.length - 1].substring(
            0,
            sentenceArr[sentenceArr.length - 1].length - 1,
        );
        sentenceArr[sentenceArr.length - 1] = modifiedLastWord;
    }
    let longestWord = "";

    for (let index = 0; index < sentenceArr.length; index++) {
        if (sentenceArr[index].length >= longestWord.length) {
            longestWord = sentenceArr[index];
        }
    }

    return longestWord;
};
