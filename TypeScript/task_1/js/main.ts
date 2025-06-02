//task1 Write an interface named Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
}

//task2 Write an interface named Directors that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

//task3 write a function printTeacher and write an interface named printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName[0];
    return `${firstInitial}. ${lastName}`;
}
//console.log(printTeacher("Luis", "Feliciano"));

//task4 write a Class named StudentClass with an interface for constructor of the class and the interface for the class
class StudentClass {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

interface StudentClassConstructos {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
// const student = new StudentClass("Luis", "Feliciano");
//console.log(student.displayName());
//console.log(student.workOnHomework());



