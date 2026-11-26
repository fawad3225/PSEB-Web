let Name = prompt("Enter your name");

let age = prompt("Enter your age");

let enrolled = prompt("Are you enrolled?");

let accountNumber = prompt("Enter your account number");

document.getElementById("output").innerHTML = `
    <p><b>Name:</b> ${Name}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Status:</b> ${enrolled}</p>
    <p><b>Account Number:</b> ${accountNumber}</p>
`;
