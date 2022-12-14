const requestURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=33.1581&lon=-117.3506&appid=9e972cb2fc69ed1c08d9704b40ffe53e&units=imperial";

const requestURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=9e972cb2fc69ed1c08d9704b40ffe53e&units=imperial";

const cards = document.querySelector(".buiscards");
// [-33.4569, -70.6483]
// 

async function apiFetch() {
  try {
    const response = await fetch(requestURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  currentHumi.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`; 

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;

}

apiFetch();

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");
const currentHumi = document.querySelector("#humidity")


async function apiFetch2() {
  try {
    const response = await fetch(requestURL2);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

