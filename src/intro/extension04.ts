/**
 * # Extension 4
 *
 * create a function `passingStudents` that accepts an array of student
 * objects. It should iterate through the list of students and return
 * an array of the names of all the students who have an average grade
 * of at least 70.
 *
 */

type grade = {
    id: number;
    score: number;
};

type student = {
    name: string;
    id: number;
    grades: grade[];
};

/**
 * Returns name of students with passing grade averages (>= 70)
 *
 * @param students - array of student objects
 * @returns array of passing student names
 */

export const passingStudents = (students: student[]): string[] => {
    let outputStudents: string[] = new Array();

    for (let i = 0; i < students.length; i++) {
        const aveScore =
            students[i].grades.reduce((accumulator, { score }) => {
                return accumulator + score;
            }, 0) / students[i].grades.length;

        if (aveScore >= 70) {
            outputStudents.push(students[i].name);
        }
    }

    return outputStudents;
};
