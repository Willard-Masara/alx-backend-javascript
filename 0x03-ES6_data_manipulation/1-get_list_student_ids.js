/* if not array problem*/

const getListStudentIds = (students) => {
    // Check if the argument is an array
    if (!Array.isArray(students)) {
        return []; // Return an empty array if the argument is not an array
    }

    // Use the map function to extract ids from the array of objects
    return students.map(student => student.id);
};
