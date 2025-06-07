/*
 * # Challenge 13
 *
 * create a function `divisibleByFivePairSum` that takes
 * an array of numbers.
 *
 * it should return an array of all the pairs of
 * indices whos sum is a multiple of five
 *
 * */

/**
 * desc
 * @param {number[]} array - array of numbers
 */

type numberPair = [number, number];
type arrayOfNumberPairs = numberPair[];

export const divisibleByFivePairSum = (array: number[]) => {
    if (array.length < 2) {
        return [];
    }

    const resultArray: arrayOfNumberPairs = [];

    for (let index = 0; index < array.length; index++) {
        for (
            let innerIndex = index + 1;
            innerIndex < array.length;
            innerIndex++
        ) {
            const sum = array[index] + array[innerIndex];
            if (sum % 5 === 0) {
                const newNumberPair: numberPair = [index, innerIndex];

                resultArray.push(newNumberPair);
            }
        }
    }

    return resultArray;
};
