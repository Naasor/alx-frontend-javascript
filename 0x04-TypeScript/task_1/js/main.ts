interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}


const teacher1: Teacher = {
    firstName: "Kwesi",
    lastName: "Oyerifi",
    fullTimeEmployee: true,
    location: "Accra",
    contract: true
};

const teacher2: Teacher = {
    firstName: "Betty",
    lastName: "Kotoka",
    fullTimeEmployee: false,
    location: "Kumasi"
};

const director1: Directors = {
    firstName: "Gyamfi",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "Sunyani",
    numberOfReports: 5,
    contract: true
};

const director2: Directors = {
    firstName: "Bobby",
    lastName: "Brown",
    fullTimeEmployee: false,
    location: "Tema",
    numberOfReports: 3
};

const teachersList: Teacher[] = [teacher1, teacher2, director1, director2];

const container = document.getElementById('teacher-info');
if (container) {
    teachersList.forEach(teacher => {
        const teacherDiv = document.createElement('div');
        teacherDiv.textContent = `${teacher.firstName} ${teacher.lastName} (${teacher.location}) - Full Time: ${teacher.fullTimeEmployee}`;

        if ('numberOfReports' in teacher) {
            teacherDiv.textContent += ` - Reports: ${teacher.numberOfReports}`;
        }

        container.appendChild(teacherDiv);
    });
}

export { printTeacher, StudentClass };


// Example usage
const student = new StudentClass('Sandy', 'Amofa');
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
console.log(director1); //should print object
console.log(teacher2); //should print
console.log(printTeacher("Alex", "Amofa")); // Output: A. Amofa
