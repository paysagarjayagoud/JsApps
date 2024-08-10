// const temperatureField = document.querySelector(".temp");
// const cityField = document.querySelector(".temp-location p");
// const dateField = document.querySelector(".temp-location span");
// const emojiField = document.querySelector(".weather_condition img");
// const weatherField = document.querySelector(".weather_condition span");
// const searchField = document.querySelector(".searchField");
// const form = document.querySelector("form");

// let cityName = 'pune';

// form.addEventListener('submit', function (event) {
//     event.preventDefault();                                                             // Prevent form submission
//     cityName = searchField.value;                                                  // Update cityName with the value from searchField
//     getWeatherInfo(cityName);                                                    // Call the function to fetch weather info
// });

// async function getWeatherInfo(cityName) {
//     const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3f6e34683c8441ac913160916232309&q=${cityName}&aqi=yes`);
//     const weatherData = await response.json();
//     console.log(weatherData);
//     let temp = weatherData.current.temp_c;
//     let name = weatherData.location.name;
//     let condition = weatherData.current.condition.text;
//     let url = weatherData.current.condition.icon;
//     let date = weatherData.current.last_updated;

//     temperatureField.innerHTML = temp;
//     cityField.innerHTML = name;
//     dateField.innerHTML = date;

//     emojiField.src = url;
//     weatherField.innerHTML = condition;
// };