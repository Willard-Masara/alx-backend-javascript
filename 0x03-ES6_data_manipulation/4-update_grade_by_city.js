/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */

const updateStudentGradeByCity = (studArray, city, newGrades) => {
    if (!Array.isArray(studArray)) {
        throw new TypeError(`${studArray} is not a valid student array`);
    }
    if (typeof city !== 'string') {
        throw new TypeError(`${city} is not a valid city name`);
    }
    if (!Array.isArray(newGrades)) {
        throw new TypeError(`${newGrades} is not a valid grades array`);
    }

    // Filter students based on the specified city
    const filteredStudents = studArray.filter(student => student.location === city);

    // Map through filtered students and update their grades
    return filteredStudents.map(student => {
        // Find the grade object for the current student in newGrades array
        const studentGrade = newGrades.find(grade => grade.studentId === student.id);

        // If the student has a grade in newGrades, assign it; otherwise, assign 'N/A'
        const grade = studentGrade ? studentGrade.grade : 'N/A';

        // Return the student object with the updated grade
        return { ...student, grade };
    });
};

