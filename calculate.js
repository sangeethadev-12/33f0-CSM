const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function calculate(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Error! Division by zero.";
    }
  } else {
    return "Invalid operator!";
  }
}
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      const result = calculate(num1, operator, num2);
      console.log("Result: " + result);

      rl.close();
    });
  });
});
