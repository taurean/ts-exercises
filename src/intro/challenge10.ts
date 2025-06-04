/**
 * # Challenge 10
 *
 * create a function `unique` that returns
 * an array where all the duplicates of the
 * input array have been removed; in other
 * words, every element remaining is unique.
 *
 */

type uniqueArrayItem = number | string;

/**
 * deduplicates all entries from an input array and returns new
 * trimmed array
 * @param {uniqueArrayItem[]} array - an array of strings or numbers;
 */

export const unique = (array: uniqueArrayItem[]) => {
    const newArr: uniqueArrayItem[] = [];

    for (let index = 0; index < array.length - 1; index++) {
        if (!newArr.includes(array[index])) {
            newArr.push(array[index]);
        }
    }

    return newArr;
};
