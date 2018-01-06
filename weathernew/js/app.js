$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
const weather = new Weather('Chennai','TN');

document.addEventListener('DOMContentLoaded',getWeather);

function getWeather(){
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}