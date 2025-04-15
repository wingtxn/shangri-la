// Make sure this runs AFTER the page loads
window.addEventListener('DOMContentLoaded', () => {
    const WeatherIcon = document.getElementById('weather-icon');
    const WeatherValue = document.getElementById('weather-value');

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.161907&lon=-86.851524&units=metric&appid=a4724e49dbcc5b5d9cfc745e95d98b15')
        .then(response => response.json())
        .then(data => {
            const iconCode = data.weather[0].icon;
            const temp = Math.round(data.main.temp);

            WeatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            WeatherValue.textContent = `${temp}°C`;
        })
        .catch(error => {
            console.error("Weather API error:", error);
            WeatherValue.textContent = "Weather unavailable";
        });
});