//task5 Create interface, class and function.
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

//function that returns Director and has a salary args. If salary is less than 500 it returns a new Teacher
function createEmployee(salary: number): string {
    if (salary < 500) {
        return "Teacher"
    } else {
        return "Director"
    }
}

//task6 creating functions
function isDirector(employee: any): employee is Director {
    if (employee.workDirectorTasks !== undefined) {
        return true;
    } else {
        return false;
    }
}