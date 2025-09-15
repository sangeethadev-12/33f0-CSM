console.log("=== Hour 1: JSON BASIC ===");

let student = {
    name: "sangeetha",
    age: 20,    
    marks: [85,90,55]
};

//convert object -> JSON string
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);
console.log("Type of jsonString:", typeof jsonString);

//convert JSON string -> object
let parsedObject = JSON.parse(jsonString);
console.log("parsed Object:", parsedObject);

//variable of Books title ,price and author name
let books = [
    {title: "Atomic Habit", price: 200, authorName: "sathi"},
    {title: "AI&ML", price: 150, authorName: "sangu"},
    {title: "stanger Things", price: 300, authorName: "srav"}
];  
let booksJsonString = JSON.stringify(books);
console.log("Books JSON String:", booksJsonString);
let parsedBooks = JSON.parse(booksJsonString);
console.log("Parsed Books Object:", parsedBooks);

// Fetch sample json from API
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error('Error fetching data:', error));

  //Fetch sample json and remove 1 post
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data =>  console.log("Fetched All Posts:", data))
  .catch(error => console.error('Error fetching data:', error));

  // Hour 3: Dispaly json data on webpage

  //Fetch all users and show in console + page
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {  
    let output = "Users List:\n";
    users.forEach(user => {
      output += `${user.name} - (${user.email})\n`;
    });
    console.log(output);
  })
  .catch(err => console.error(err));
 

  const cityCoords = {
    "banglore":{lat: 12.97, lon: 77.59},
    "mumbai":{lat: 19.07, lon: 72.87},
    "delhi":{lat: 28.61, lon: 77.20},
    "chennai":{lat: 13.08, lon: 80.27},
    "kolkata":{lat: 22.57, lon: 88.36}
 };

document.getElementById("fetchWeatherBtn").addEventListener("click",()=>{
    let city = document.getElementById("cityInput").value.toLowerCase();

    if(cityCoords[city]){
       document.getElementById("weather").innerHTML = "⚠️City not in list";
       return;
    }
 
    let coords=cityCoords[city];
    let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
       
    fetch(url)
       .then(res => res.json())
       .then(data => {
          if(data.current_weather){
             document.getElementById("weather").innerHTML =
                `<h3>Weather in ${city}</h3>
                <p> 🌡️Temp: ${data.current_weather.temperature}°C</p>
                <p> 🌬️Wind: ${data.current_weather.windspeed} km/h</p>
                <p> 🕒Time: ${data.current_weather.time}</p>`;
          }
          else{
             document.getElementById("weather").innerHTML = "⚠️Weather data not available";
          }
       })
       .catch(err => {
          document.getElementById("weather").innerHTML = "⚠️Error fetching weather data";
       });
 });
