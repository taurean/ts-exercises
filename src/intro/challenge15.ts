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
    const a = Math.abs(num1);
    const b = Math.abs(num2);
    return b ? greatestCommonDivisor(b, a % b) : a;
};

export const leastCommonMultiple = (num1: number, num2: number): number => {
    // via https://www.calculatorsoup.com/calculators/math/gcf.php
    // leastCommonMultiple(a, b) = (a*b)greatestCommonDivisor(a, b)
    const a = Math.abs(num1);
    const b = Math.abs(num2);
    return (a * b) / greatestCommonDivisor(a, b);
};
