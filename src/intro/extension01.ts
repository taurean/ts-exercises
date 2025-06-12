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

    const buildSubArray = (string: string, amount: number): string[] => {
        let newSubArray: string[] = [];
        for (let index = 0; index < amount; index++) {
            newSubArray.push(string);
        }
        return newSubArray;
    };

    for (let index = 0; index < Object.keys(count).length; index++) {
        const newArray = buildSubArray(
            Object.keys(count)[index],
            Object.values(count)[index],
        );
        outputArray = outputArray.concat(newArray);
    }

    return outputArray;
};
