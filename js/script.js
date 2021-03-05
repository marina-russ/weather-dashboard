// * 1) User searches a city
// ? city is shown in a search history
// * user can click on search history to return to a city

// * 2) Pull weather API data from said city
// ? Display today's data
// ? Display 5-day forecast
// * Use luxon to display 8/16, 8/17, 8/18 etc
// * Have icon change based on type of weather
// * Have UV rating color change based on level
// TODO: add feature that shows weather alerts? 

// ***** DATES
// ! LUXON is currently commented out in HTML
//import { DateTime } from "luxon";
//var DateTime = luxon.DateTime;
//var now = DateTime.now();
//console.log("today: ", DateTime);

// ! PROBLEMS TO SOLVE:
// ! How do I increase date after 30th or 31st of the month?
////tomorrow
// var dt1 = DateTime.now();
// dt1.plus({ days: 1});
// // two days from now
// var dt2 = DateTime.now();
// dt2.plus({ days: 2 });
// console.log("day 1 :", dt1 ,"day 2: ", dt2);

// ***** ACCESS API
const api = {
  key: 'f1955bf6ba835a266ab0e914ca296be6',
  base: 'https://api.openweathermap.org/data/2.5/',
};

// * links javascript variables to HTML
let button = document.querySelector('#search-button');
let input = document.querySelector('#input-text');
// ! .trim()
//let input = document.trim(getElementById('input-text'));
//let input = (document.getElementById('input-text')).trim;
//input = input.trim();


// ***** GET WEATHER INFO FROM API

const generateWeatherInfo = function (userInput) {
  // *** TODAY'S FORECAST API
  // sends fetch request for today's forecast; converts promise response data into JSON objects; transfers API data from JSON objects to new javascript variables
  fetch(`${api.base}weather?q=${userInput}&units=imperial&appid=${api.key}`)
    .then(response => response.json())
    .then(data => {
      // links javascript to API data
      let cityName = data.name;
      let cityTemp = parseInt(data.main.temp);
      let cityHumid = data.main.humidity;
      let cityWind = data.wind.speed;
      let cityDesc = data.weather[0].description;
      let cityIcon = data.weather[0].icon;
      console.log("Today's weather: ", data);
      // links javascript to HTML elements
      let city = document.querySelector('#city-name');
      let temp = document.querySelector('#city-temp-today');
      let humid = document.querySelector('#city-humid-today');
      let wind = document.querySelector('#city-wind-today');
      let desc = document.querySelector('#city-desc-today');
      let icon = document.querySelector('#city-icon-today');
      // replaces javascript HTML element content with javascript API data
      city.innerHTML = cityName;
      icon.innerHTML = cityIcon;
      temp.innerHTML = "Temperature: " + cityTemp + "°F";
      humid.innerHTML = "Humidity: " + cityHumid + "%";
      wind.innerHTML = `<b>Wind Speed</b>: ${cityWind} MPH`;
      desc.innerHTML = "Today: " + cityDesc;
      // lets us access lat+lon outside of this fxn, required for UV Index API to be successfully fetched further below
      let cityLat = data.coord.lat;
      let cityLon = data.coord.lon;
      let geolocation = {
        lat: cityLat,
        lon: cityLon
      };

      // *** 5-DAY FORECAST API
      // sends fetch request for 5-day forecast
      fetch(`${api.base}forecast?q=${userInput}&units=imperial&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
          // links javascript to API data
          // day 1
          let futureTempData1 = parseInt(data.list[3].main.temp);
          let futureHumidData1 = data.list[3].main.humidity;
          let futureDescData1 = data.list[3].weather[0].description;
          let futureIconData1 = data.list[3].weather[0].icon;
          // day 2
          let futureTempData2 = parseInt(data.list[11].main.temp);
          let futureHumidData2 = data.list[11].main.humidity;
          let futureDescData2 = data.list[11].weather[0].description;
          let futureIconData2 = data.list[11].weather[0].icon;
          // day 3
          let futureTempData3 = parseInt(data.list[19].main.temp);
          let futureHumidData3 = data.list[19].main.humidity;
          let futureDescData3 = data.list[19].weather[0].description;
          let futureIconData3 = data.list[19].weather[0].icon;
          // day 4
          let futureTempData4 = parseInt(data.list[27].main.temp);
          let futureHumidData4 = data.list[27].main.humidity;
          let futureDescData4 = data.list[27].weather[0].description;
          let futureIconData4 = data.list[27].weather[0].icon;
          // day 5
          let futureTempData5 = parseInt(data.list[35].main.temp);
          let futureHumidData5 = data.list[35].main.humidity;
          let futureDescData5 = data.list[35].weather[0].description;
          let futureIconData5 = data.list[35].weather[0].icon;
          console.log("5 day forecast: ", data);
          // links javascript to HTML elements
          // day 1
          let futureTemp1 = document.querySelector('.future-temp-day1');
          let futureHumid1 = document.querySelector('.future-humid-day1');
          let futureDesc1 = document.querySelector('.future-desc-day1');
          let futureIcon1 = document.querySelector('.future-icon-day1');
          // day 2
          let futureTemp2 = document.querySelector('.future-temp-day2');
          let futureHumid2 = document.querySelector('.future-humid-day2');
          let futureDesc2 = document.querySelector('.future-desc-day2');
          let futureIcon2 = document.querySelector('.future-icon-day2');
          // day 3
          let futureTemp3 = document.querySelector('.future-temp-day3');
          let futureHumid3 = document.querySelector('.future-humid-day3');
          let futureDesc3 = document.querySelector('.future-desc-day3');
          let futureIcon3 = document.querySelector('.future-icon-day3');
          // day 4
          let futureTemp4 = document.querySelector('.future-temp-day4');
          let futureHumid4 = document.querySelector('.future-humid-day4');
          let futureDesc4 = document.querySelector('.future-desc-day4');
          let futureIcon4 = document.querySelector('.future-icon-day4');
          // day 5
          let futureTemp5 = document.querySelector('.future-temp-day5');
          let futureHumid5 = document.querySelector('.future-humid-day5');
          let futureDesc5 = document.querySelector('.future-desc-day5');
          let futureIcon5 = document.querySelector('.future-icon-day5');
          // replaces javascript HTML element content with javascript API data
          // day 1
          futureTemp1.innerHTML = "Temperature: " + futureTempData1 + "°F";
          futureHumid1.innerHTML = "Humidity: " + futureHumidData1 + "%";
          futureDesc1.innerHTML = "Forecast: " + futureDescData1;
          futureIcon1.innerHTML = futureIconData1;
          // day 2
          futureTemp2.innerHTML = "Temperature: " + futureTempData2 + "°F";
          futureHumid2.innerHTML = "Humidity: " + futureHumidData2 + "%";
          futureDesc2.innerHTML = "Forecast: " + futureDescData2;
          futureIcon2.innerHTML = futureIconData2;
          // day 3
          futureTemp3.innerHTML = "Temperature: " + futureTempData3 + "°F";
          futureHumid3.innerHTML = "Humidity: " + futureHumidData3 + "%";
          futureDesc3.innerHTML = "Forecast: " + futureDescData3;
          futureIcon3.innerHTML = futureIconData3;
          // day 4
          futureTemp4.innerHTML = "Temperature: " + futureTempData4 + "°F";
          futureHumid4.innerHTML = "Humidity: " + futureHumidData4 + "%";
          futureDesc4.innerHTML = "Forecast: " + futureDescData4;
          futureIcon4.innerHTML = futureIconData4;
          // day 5
          futureTemp5.innerHTML = "Temperature: " + futureTempData5 + "°F";
          futureHumid5.innerHTML = "Humidity: " + futureHumidData5 + "%";
          futureDesc5.innerHTML = "Forecast: " + futureDescData5;
          futureIcon5.innerHTML = futureIconData5;
          // ***** UV INDEX API
          // sends fetch request for UV index
          fetch(`${api.base}onecall?lat=${geolocation.lat}&lon=${geolocation.lon}&exclude={minutely}&units=imperial&appid=${api.key}`)
            .then(response => response.json())
            .then(data => {
              // links javascript to API data
              let uvIndex = data.current.uvi; 
              // links javascript to HTML elements
              cityUVIndex = document.querySelector('#city-uvi-today');
              // replaces javascript HTML element content with javascript API data
              cityUVIndex.innerHTML = `
              <p id="city-uvi-today">UV Index: <span id="uvi-badge" class="badge rounded-pill bg-primary">${uvIndex}</span></p>
              `
            });
        });
    });

  //TODO: alert for wrong city names
  //.catch(err => alert("That's not a city name!"));
}

// sends fetch request on button click
button.addEventListener('click', function() {
  const userInput = document.querySelector("#input-text").value;
  generateWeatherInfo(userInput);

  //create button
  let buttonMarkup = document.createElement('li');
  buttonMarkup.setAttribute("class",`city-list-item list-group-item ${userInput}`);
  buttonMarkup.innerHTML = userInput;

  //add button to the page
  document.querySelector("#search-list").append(buttonMarkup);

  //add event listener to the button
  document.querySelector(`.${userInput}`).addEventListener("click", function() {
    generateWeatherInfo(userInput);
  });

  //store in local storage

  //1. get the array from local
  //2. push to this array
  //3. set the array to local storage


});



// ? UVI levels and <span> badge colors to use:
/*
green, 1-2, #198754
yellow, 3-5, #ffc107; want .text-dark added
orange, 6-7, #fd7e14; want .text-dark added
red, 8-10, #dc3545
purple, 11, #6f42c1
*/

//TODO: if statements for UV index & weather icons
// info on UV index:
// https://www.epa.gov/sunsafety/uv-index-scale-0

