const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter Principal Amount: ", (P) => {
  rl.question("Enter Rate of Interest (%): ", (R) => {
    rl.question("Enter Time (in years): ", (T) => {
      rl.question("Enter Number of times interest applied per year: ", (n) => {
        
        P = parseFloat(P);
        R = parseFloat(R);
        T = parseFloat(T);
        n = parseInt(n);
        let A = P * Math.pow((1 + (R / (100 * n))), n * T);
        let CI = A - P;

        console.log("\nTotal Amount: " + A.toFixed(2));
        console.log("Compound Interest: " + CI.toFixed(2));

        rl.close();
      });
    });
  });
});