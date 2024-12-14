function displayTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    losAngelesDateElement = document.querySelector("#los-angeles .date");
    losAngelesDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
    losAngelesTimeElement = document.querySelector("#los-angeles .time");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("hh:mm:ss[<small>]A[</small>]");
  }
  let ParisElement = document.querySelector("#paris");
  if (ParisElement) {
    parisDateElement = document.querySelector("#paris .date");
    parisDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
    parisTimeElement = document.querySelector("#paris .time");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("hh:mm:ss[<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone).format("dddd, MMMM Do YYYY");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime}</div>
                        
                </div>
                <div class="time">${moment()
                  .tz(cityTimeZone)
                  .format("hh:mm:ss[<small>]A[<small>]")}</div>
                  
            </div>;
            <div > <a href="/" class="all_cities"> All cities </a></div>`;
}
setInterval(displayTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
