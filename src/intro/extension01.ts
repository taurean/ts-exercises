/**
 * # Extension 1
 *
 * Create a function `arrayBuilder` that takes in a count
 * object and returns an array filled with the appropriate number
 * of elements. The order of the elements in the array does not
 * matter, but repeated elements should be grouped.
 *
 */

type count = {
    [key: string]: number;
};

/**
 * construct an array of strings using a count object
 * @param {count} count - an object consisting of strings and the number of times they should repeat
 */

export const arrayBuilder = (count: count): string[] => {
    // initiate new empty array to construct
    let outputArray: string[] = [];
    const argsCount = Object.keys(count);

    // if object is empty, return empty array
    if (!argsCount.length) {
        return outputArray;
    }

    // destructure each key value pair and then add the
    // key to an array for the number of times in the value
    // then merge to the outputArray
    for (const [string, amount] of Object.entries(count)) {
        const newSubArray: string[] = [];

        // loop pushing {string} for {amount} of times
        for (let subIndex = 0; subIndex < amount; subIndex++) {
            newSubArray.push(string);
        }

        outputArray = outputArray.concat(newSubArray);
    }

    return outputArray;
};
