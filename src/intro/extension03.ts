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

type Cipher = {
    [key: string]: string;
};

export const secretCipher = (sentence: string, cipher: Cipher): string => {
    let translatedStr = new Array();

    for (let index = 0; index < sentence.length; index++) {
        if (sentence[index] in cipher) {
            translatedStr.push(cipher[sentence[index]]);
        } else {
            translatedStr.push(sentence[index]);
        }
    }

    return translatedStr.join("");
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
