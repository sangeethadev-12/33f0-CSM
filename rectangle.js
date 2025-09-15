const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function calculateArea(length, width) {
  return length * width;
}
function calculatePerimeter(length, width) {
  return 2 * (length + width);
}
rl.question("Enter length of rectangle: ", (length) => {
  rl.question("Enter width of rectangle: ", (width) => {
    length = parseFloat(length);
    width = parseFloat(width);

    const area = calculateArea(length, width);
    const perimeter = calculatePerimeter(length, width);

    console.log("\nArea of rectangle: " + area);
    console.log("Perimeter of rectangle: " + perimeter);

    rl.close();
  });
});
