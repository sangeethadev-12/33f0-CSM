let distance = 19.5;
let fare = 0;

if (distance <= 4) {
  fare = 3;
} else if (distance <= 9) { 
  fare = 10;
} else if (distance <= 19) { 
  fare = 15;
} else {
  fare = 20;
}
console.log("Total fare for " + distance + " km is Rs." + fare);
