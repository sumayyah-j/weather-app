document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getWeatherBtn").addEventListener("click", async function () {
      const city = document.getElementById("cityInput").value;
      const apiKey = "e5bd901848584978b27210112250105";
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        const html = `
          <h2>${data.location.name}, ${data.location.region}</h2>
          <p><strong>Temperature:</strong> ${data.current.temp_f} °F</p>
          <p><strong>Condition:</strong> ${data.current.condition.text}</p>
          <img src="https:${data.current.condition.icon}" alt="Weather icon" />
        `;
  
        document.getElementById("weatherDisplay").innerHTML = html;
      } catch (error) {
        console.error(error);
        document.getElementById("weatherDisplay").innerHTML = "<p>Could not get weather. Try again.</p>";
      }
    });
  });  