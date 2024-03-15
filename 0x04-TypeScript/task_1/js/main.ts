// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    printTeacher: (firstName: string, lastName: string) => string; // Function signature
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the PersonClass interface
interface PersonClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the class
class Person implements PersonClass, Teacher, Directors {
    constructor(public firstName: string, public lastName: string, public fullTimeEmployee: boolean, public location: string, public numberOfReports?: number, public yearsOfExperience?: number) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }

    // Function signature implementation for printTeacher
    printTeacher(firstName: string, lastName: string): string {
        const firstInitial = firstName.charAt(0);
        return `${firstInitial}. ${lastName}`;
    }
}

// Create an instance of the class
const person1 = new Person("John", "Doe", true, "New York", 10, 5);

// Test the methods
console.log(person1.workOnHomework()); // Output: Currently working
console.log(person1.displayName());    // Output: John
console.log(person1.printTeacher("Jane", "Smith")); // Output: J. Smith

