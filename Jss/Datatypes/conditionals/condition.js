let marks = +prompt("Enter Your Marks");
document.writeln(typeof marks + "<br>");

if (marks >= 85 && marks <= 100) {
  document.writeln("Grade A+");
} else if (marks >= 70 && marks < 85) {
  document.writeln("Grade A");
} else if (marks >= 30 && marks < 70) {
  document.writeln("Grade B");
} else if (marks > 30) {
  document.writeln("Fail");
} else {
  document.writeln(`marks is ${marks}`);
}
