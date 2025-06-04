/*
 ** # Challenge 7
 **
 ** create a function `isPrime` that returns a boolean
 ** indicating if `number` is prime or not.
 **
 */

export const isPrime = (number: number) => {
    // found via DelfStack - https://www.delftstack.com/howto/javascript/isprime-javascript/#method-2-optimized-check-with-early-returns
    //
    // prime numbers must be greater than 1?
    if (number <= 1) return false;
    // 2 is the only even prime number
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    // start at 3, increment by 2 to only check odd numbers
    for (let index = 3; index <= Math.sqrt(number); index += 2) {
        if (number % index === 0) return false;
    }
    return true;
};
