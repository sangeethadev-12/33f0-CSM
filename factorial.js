const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
rl.question("Enter a number: ", (num) => {
  num = parseInt(num);
  if (num < 0) {
    console.log("Factorial not defined for negative numbers.");
  } else {
    console.log("Factorial of " + num + " is: " + factorial(num));
  }
  rl.close();
});
  