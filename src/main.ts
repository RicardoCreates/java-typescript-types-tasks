
// Step 1
console.log("Aufgabe1")

type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

const student: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2]
};

function printStudent(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log(`Noten: ${student.grades.join(", ")}`);
}

printStudent(student);

// Step 2

console.log("Aufgabe 2")


type Student2 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

function printStudent2(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log(`Noten: ${student.grades.join(", ")}`);
}

const student2: Student2 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ['A', 2, 'F', 3, 1, 'B', 2, 5]
};

printStudent2(student2);

// Step 3
console.log("Aufgabe 3")

type Student3 = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

function printStudent3(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    const formattedGrades = student.grades.map(grade => grade === undefined ? '*' : grade);
    console.log(`Noten: ${formattedGrades.join(", ")}`);
}

const student3: Student3 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ['A', 2, undefined, 3, 1, 'B', undefined, 5]
};

printStudent3(student3);

//Step 4
console.log("Aufgabe 4")

function printStudents(students: Student[]): void {
    students.forEach(student => {
        printStudent(student);
        console.log();  // Leere Zeile zwischen Schülern für bessere Lesbarkeit
    });
}

const students: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, 'A', undefined, 1, 2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ['A', undefined, 1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ['A', 1, undefined, 3, 2, 4, 5]
    }
];

printStudents(students);




