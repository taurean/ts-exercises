/**
 * # Challenge 9
 *
 * create a function `myIndexOf` that takes an array and
 * an element and returns the index of the element in the
 * array, or `-1` IF IT DOESNT EXIST.
 *
 * assume the `ele`  will be a primitive data type (no arrays or objects)
 *
 * DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION
 *
 */

type genericTypes = null | undefined | boolean | BigInt | number | string;

/**
 * a basic recreation of the builtIn `indexOf` function
 * @param {array} array - the array being checked
 * @param {array} array - the element being checked
 */

export const myIndexOf = (array: genericTypes[], ele: genericTypes) => {
    // returns early response if element doesnt exist
    if (!array.includes(ele)) {
        return -1;
    }
    // create a new arr comprised of every value in
    // the array up to the searched for value
    let newTrackerArr = [];

    for (let index = 0; array[index] !== ele; index++) {
        newTrackerArr.push(array[index]);
    }

    return newTrackerArr.length;
};
