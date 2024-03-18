/*the comments are important for the checker*/

export function getStudentIdsSum = (students) => {
    // Use the reduce function to compute the sum of all student IDs
    return students.reduce((sum, student) => sum + student.id, 0);
};
