//Initialize the storage class
const storageClass = new storage();

//Initialize the weather class
const weatherLocation = storageClass.getLocationData();

const weather = new Weather(weatherLocation);
//Initialize the ui class
const ui = new UI();

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

//change location event
document.getElementById("w-change-btn").addEventListener("click", event => {
  const city = document.getElementById("city").value;

  weather.changeLocation(city);

  //set location in local storage
  storageClass.setLocationData(city);

  //Get and display weather
  getWeather();

  //Close modal
  $("#locModal").modal("hide");

  event.preventDefault();
});

function getWeather() {
  weather
    .getWeather()
    .then(data => {
      ui.paint(data);
      console.log(data);
    })
    .catch(err => console.log("Error lodaing the data: ", err));
}
