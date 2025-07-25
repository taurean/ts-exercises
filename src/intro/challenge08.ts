/*
 ** # Challenge 8
 **
 ** create a function `range` that returns
 ** all numbers between 'start' and 'end' in sequential order
 */

/**
 * returns an array of numbers incremented by 1 between two numbers
 * @param {number} start - the starting array value
 * @param {number} end - the ending array value
 */

export const range = (start: number, end: number) => {
    let resultArr: number[] = [];

    if (end < start) {
        return resultArr;
    }

    for (let index = start; index <= end; index++) {
        resultArr.push(index);
    }

    return resultArr;
};
