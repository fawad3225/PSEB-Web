let age = +prompt("Enter your age");

function drivingLicence(age) {
  if (age >= 18) {
    document.writeln("Eligible for driving licence");
  } else {
    document.writeln("Not eligible for driving licence,Age is less than 18");
  }
}
drivingLicence(age);

// function notEligible(){
//     return "Not eligible for driving licence";
// }

// if(age >= 18){
//     document.writeln(eligible());
// }
// else{
//     document.writeln(notEligible());
// }
