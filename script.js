const apiKey = "591574ad50974c7d895202633263101";
function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (city === "") {
        alert("Enter city name");
        return;
    }
    const url =
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert("City not found");
                return;
            }
            document.getElementById("name").innerText =
                data.location.name;

            document.getElementById("temp").innerText =
                Math.round(data.current.temp_c) + " °C";
        });
}