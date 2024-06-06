// DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement Director class
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

// Implement Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Define types for Director and Teacher
//type Director = DirectorInterface;
//type Teacher = TeacherInterface;

// isDirector function
function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
  }

// executeWork function
function executeWork(employee: Teacher | Director): string {
    if (employee instanceof Director) {
      return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
      return employee.workTeacherTasks();
    }
}

// String literal type named Subjects
type Subjects = "Math" | "History";

// teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        // Handle other cases if needed
        return "Not teaching any subject";
    }
}

// Example usage:
const employee1 = createEmployee(400); // Will return a Teacher instance
console.log(employee1.workFromHome()); // Cannot work from home

const employee2 = createEmployee(600); // Will return a Director instance
console.log(employee2.workFromHome()); // Working from home

const director: Director = new Director();
const teacher: Teacher = new Teacher();

console.log(executeWork(director)); // Will call workDirectorTasks
console.log(executeWork(teacher)); // Will call workTeacherTasks

const mathClass: Subjects = "Math";
const historyClass: Subjects = "History";

console.log(teachClass(mathClass)); // Teaching Math
console.log(teachClass(historyClass)); // Teaching History

console.log(createEmployee('$500'));
console.log(createEmployee(1000));
console.log(createEmployee(200));
