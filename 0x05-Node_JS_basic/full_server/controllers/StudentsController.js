mport { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase('./database.csv');

      let responseBody = 'This is the list of our students\n';
      Object.keys(studentsByField)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
        .forEach((field) => {
          responseBody += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
        });

      res.status(200).send(responseBody);
    } catch (error) {
      console.error('Cannot load the database');
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase('./database.csv');
      const studentsInMajor = studentsByField[major] || [];

      let responseBody = `List of students in ${major}:\n`;
      responseBody += `List: ${studentsInMajor.join(', ')}\n`;

      res.status(200).send(responseBody);
    } catch (error) {
      console.error('Cannot load the database');
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

