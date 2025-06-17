/**
 * # Extension 2
 *
 * create a function `objectBuilder` that takes in a number
 * and returns an object whose keys are 0 up to number and
 * the values are that same number multipled by 5.
 *
 */

type numberObj = {
    [index: number]: number;
};

/**
 * transform a number into an object whose keys are 0 up to the input number with values are that number * 5
 * @param { number } count - the input number for calculating keys and values
 */

export const objectBuilder = (count: number): numberObj => {
    let outputObj: numberObj = {
        0: 0,
    };
    for (let index = 0; index <= count; index++) {
        outputObj[index] = index * 5;
    }

    return outputObj;
};
