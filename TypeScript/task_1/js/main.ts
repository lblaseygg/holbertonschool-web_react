interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    const firstInitial = firstName[0];
    return `${firstInitial}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

console.log(printTeacher("Daliana", "Ortiz"));