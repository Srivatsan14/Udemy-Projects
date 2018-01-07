$(document).ready(function(){
 
  $('.modal-trigger').leanModal();
});
const weather = new Weather('Chennai','TN');
const ui = new UI();
document.addEventListener('DOMContentLoaded',getWeather);
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city,state);

  getWeather();
  
  });
 


function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}