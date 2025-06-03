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
 * @param {genericTypes[]} array - the array being checked
 * @param {genericTypes} ele - the element being checked
 */

export const myIndexOf = (array: genericTypes[], ele: genericTypes) => {
    for (let index = 0; index !== array.length; index++) {
        if (array[index] === ele) {
            return index;
        }
    }

    return -1;
};
