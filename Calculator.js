const prompt = require("prompt-sync")({ sigint: true });
let numberOne = prompt("Enter First Number : ");
let numberTwo = prompt("Enter First Number : ");
let oparator = prompt("Enter Oparator : ");
numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);
if (isNaN(numberOne) || isNaN(numberTwo)) {
  console.log("Invalid Number");
}
if (oparator === "+") {
  console.log(numberOne + numberTwo);
} else if (oparator === "-") {
  console.log(numberOne - numberTwo);
} else if (oparator === "*") {
  console.log(numberOne * numberTwo);
} else if (oparator === "/") {
  console.log(numberOne / numberTwo);
} else if (oparator === "%") {
  console.log(numberOne % numberTwo);
} else {
  console.log("Invalid oparator");
}
