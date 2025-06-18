/**
 * # Extension 3
 *
 * create a function `secretCipher` that takes in a
 * string (sentence) and an object (cipher). Return
 * a string where every character is replaced with
 * its cooresponding value in the cipher. If the
 * character doesn't exist in the cipher, use the
 * original character.
 */

type cipher = {
    [key: string]: string;
};

export const secretCipher = (sentence: string, cipher: cipher): string => {
    let translatedStr = sentence;

    for (let index = 0; index <= Object.keys(cipher).length; index++) {
        const key = Object.keys(cipher)[index];
        const value = Object.values(cipher)[index];

        if (translatedStr.includes(key)) {
            translatedStr = translatedStr.replaceAll(key, value);
        }
    }

    return translatedStr;
};

/*
 * ## thoughts/notes
 *
 * goal: push each character into a string var and return it. If key exists, replace with value. otherwise, push original character.
 *
 * question: is it better to traverse the sentence and check each character for key OR
 * check each key in string and replace that way?
 *
 */
