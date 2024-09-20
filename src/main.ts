
// Step 1
console.log("Aufgabe1")

type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

function printStudent(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log(`Noten: ${student.grades.join(", ")}`);
}

const student: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 20,
    grades: [1, 4, 3, 1, 3, 2, 1, 2]
};

printStudent(student);

// Step 2

console.log("Aufgabe 2")


const student2: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ['A', 2, 'F', 3, 1, 'B', 2, 5]
};

printStudent(student2);

// Step 3
console.log("Aufgabe 3")


const student3: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 18,
    grades: ['A', 2, undefined, 3, 1, 'B', undefined, 5]
};

printStudent(student3);

//Step 4
console.log("Aufgabe 4")

const listOfStudents: Student[] = [student, student2, student3]

function printAllStudents(students: Student[]) {
    students.forEach(student => {
        printStudent(student)
        console.log()
    })
}

printAllStudents(listOfStudents)




