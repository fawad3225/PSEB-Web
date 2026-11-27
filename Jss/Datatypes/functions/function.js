
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function mult(a, b) {
  return a * b;
}

let input1 = prompt("Enter num1");
let input2 = prompt("Enter num2");
let operator = prompt("Enter operator (+ , - , / , *)");
//Restriction 1: space / Empty check 
if (
  input1 === null ||
  input1.trim() === "" ||
  input2 === null ||
  input2.trim() === "" ||
  operator === null ||
  operator.trim() === ""
) {
  alert("Error: Don't use empty space");
}
//restriction 2: Numer check
else if (isNaN(input1) || isNaN(input2)) {
  alert("Error: Only number");
}
//restriction 3: operator check--
else if (
  operator.trim() !== "+" &&
  operator.trim() !== "-" &&
  operator.trim() !== "*" &&
  operator.trim() !== "/"
) {
  alert("Error: only +,-,*,/ allow hai");
} else if (operator.trim() === "/" && Number(input2) === 0) {
  alert("Error: Could not divide by 2");
} else {
  let  num1 = Number(input1);
  let num2 = Number(input2);
  let op = operator.trim(); 
  let answer;
  switch (operator) {
    case "+":
      answer = add(num1, num2);
      break;

    case "-":
      answer = sub(num1, num2);
      break;

    case "*":
      answer = mult(num1, num2);
      break;

    case "/":
      answer = div(num1, num2);
      break;
  }
}

document.writeln(`Num1:  ${num1} <br>`);
document.writeln(`Num2: ${num2} <br>`);
document.writeln(`Operator: ${operator} <br>`);
document.writeln(`Result: ${answer} <br>`);
