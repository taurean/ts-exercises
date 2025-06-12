/**
 * # Challenge 14
 *
 * create a function `highestScore` that takes in
 * an array of student objects as a parameter.
 *
 * it should return a string that corresponds to the
 * student with the highest score.
 *
 * the string should contain that student's initials
 * concatenated with their id.
 *
 * assume the array contains at least 1 student object
 * and the student with the highest score is unique
 * (there are no ties).
 *
 */

type student = {
    name: string;
    id: number;
    score: number;
};

/**
 * finds highest scoring student, returns student initials + ID as a concatenating string
 * @param { student[] } students - an array of student objects
 */

export const highestScore = (students: student[]): string => {
    // find the winning student
    const winningStudent: student = students.reduce(
        (lastBestStudent: student, currentStudent: student) => {
            // loop through students by comparing two at a time,
            // return the student object that has a higher score
            if (lastBestStudent.score > currentStudent.score) {
                return lastBestStudent;
            } else {
                return currentStudent;
            }
        },
    );

    // create an array of the winning students first and last name to get initials
    const studentName = winningStudent.name.split(" ");

    // concatenate the string of the initials and ID of the highest scoring student
    return `${studentName[0].charAt(0)}${studentName[studentName.length - 1].charAt(0)}${winningStudent.id}`;
};
