// Iterate over a Map of student IDs and names, and log each pair to the console.

// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Ali");
students.set(2, "Ahad");
students.set(3, "Taha");

students.forEach((name, id) => {
   console.log(`Student ID: ${id}, Name: ${name}`);
});

