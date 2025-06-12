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
    // flatten all scores into an array in the same order of the students
    const scoreArray = students.map((student) => {
        return student.score;
    });

    // find the ID of the student with the highest score
    const studentId: number = students.findIndex((student) => {
        return student.score === Math.max(...scoreArray);
    });

    // create an array of the winning students first and last name to get initials
    const studentName = students[studentId].name.split(" ");

    // concatenate the string of the initials and ID of the highest scoring student
    return `${studentName[0].charAt(0)}${studentName[studentName.length - 1].charAt(0)}${students[studentId].id}`;
};
