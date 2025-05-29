/*
 ** Challenge 4
 **
 ** Create a function `buildGreeting` that takes a time (integer) and
 ** a name (string) and print a greeting based on the following rules:
 **
 ** If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!"
 ** If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!"
 ** If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!"
 ** If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!"
 **
 */

export const buildGreeting = (time: number, name: string) => {
    if (time >= 0 && time <= 11) {
        return `Good Morning, ${name}!`;
    } else if (time >= 12 && time <= 16) {
        return `Good Afternoon, ${name}!`;
    } else if (time <= 23) {
        return `Good Evening, ${name}!`;
    } else {
        return `That's not a real time, ${name}. Maybe you need some sleep!`;
    }
};
