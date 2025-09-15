const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter student's marks (0-100): ", (marks) => {
  marks = parseFloat(marks);
  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "A+";
  } else if (marks >= 80) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else if (marks >= 50) {
    grade = "D";
  } else if (marks >= 0) {
    grade = "F";
  } else {
    grade = "Invalid marks!";
  }

  console.log("Student's Grade: " + grade);
  rl.close();
});
