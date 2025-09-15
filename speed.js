let totalTime = 96;
let timeStep = 10;  
let speed = 30;     
let maxSpeed = 120; 
let distance = 0;   

for (let t = 0; t < totalTime; t += timeStep) {
    let hours = timeStep / 60;
    distance += speed * hours;
    speed = Math.min(speed * 2, maxSpeed);
}
console.log("Total distance travelled in 96 minutes: " + distance.toFixed(2) + " km");
