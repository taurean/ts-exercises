/*
 ** Challenge 2
 **
 ** Create a functon `buildSentence` that
 ** takes three words (strings) and adds
 ** them together and console.logs the whole
 ** sentence (string) complete with
 ** capitalization and punctuation.
 **
 */

export const buildSentence = (word1: string, word2: string, word3: string) => {
    const transformedWord1 = word1.charAt(0).toUpperCase() + word1.slice(1);
    return `${transformedWord1} ${word2} ${word3}.`;
};
