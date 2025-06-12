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

    // if object is empty, return empty array
    if (!Object.keys(count).length) {
        return outputArray;
    }

    // loop through each string/amount key-value pair
    for (const [string, amount] of Object.entries(count)) {
        // skip if amount is negative value
        if (amount) {
            // loop pushing {string} for {amount} of times
            for (let subIndex = 0; subIndex < amount; subIndex++) {
                outputArray.push(string);
            }
        }
    }

    return outputArray;
};
