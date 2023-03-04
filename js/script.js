const api_Key = `8fc9ffcb9dd141d38c8c8bae8d19a8fc`;

const loadWeatherData = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;
    fetch(URL)
        .then((res) => res.json())
        .then((data) => displayWeatherData(data));
};

const displayWeatherData = (data) => {
    setInnerTextById("temperature", data.main.temp);
};

const setInnerTextById = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
    const city = document.getElementById("search-field").value;
    setInnerTextById("city-name", city);
    loadWeatherData(city);
});
