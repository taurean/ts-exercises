/**
 * # Challenge 15
 *
 * create a function `leastCommonMultiple` that takes two
 * numbers (integers) as an input and returns the lowest number
 * which is a multiple of both inputs
 */

/**
 * return the lowest number that is a multiple of both inputs
 * @param {number} num1 - first number being compared
 * @param {number} num2 - second number being compared
 *
 */

const greatestCommonDivisor = (num1: number, num2: number): number => {
    // via https://cwestblog.com/2012/10/12/javascript-euclidean-algorithm/
    return num2 ? greatestCommonDivisor(num2, num1 % num2) : num1;
};

export const leastCommonMultiple = (num1: number, num2: number): number => {
    // via https://www.calculatorsoup.com/calculators/math/gcf.php
    // leastCommonMultiple(a, b) = (a*b)greatestCommonDivisor(a, b)
    return (num1 * num2) / greatestCommonDivisor(num1, num2);
};
