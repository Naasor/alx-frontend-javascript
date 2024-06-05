interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Sandra",
    lastName: "Amofa",
    age: 31,
    location: "Ghana"
};

const student2: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    location: "USA"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
const header2 = document.createElement('th');

header1.textContent = 'First Name';
header2.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);

    firstNameCell.style.border = "1px solid pink";
    locationCell.style.border = "1px solid pink";
    firstNameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
});


table.style.background = "";
headerRow.style.background = "Yellow";
header1.style.padding = "5px";
header2.style.padding = "5px";



document.body.appendChild(table);
