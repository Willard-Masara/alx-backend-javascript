export function getStudentsByLocation = (students, city) => {
    // Use the filter function to return an array of students located in the specified city
    return students.filter(student => student.location === city);
};

