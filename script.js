// Write your JavaScript code here!
window.addEventListener("load", function() {
   // fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
   //    console.log(response);
   // } );

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      //stops the form submission
      event.preventDefault();
      alert("submit clicked");
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      // alert the current value found in the username input
      alert("username: " + pilotNameInput.value);
      //Adding Alerts -Chris

      //This validates all fields are filled. -chris
      if(pilotNameInput.value.trim() === "" || coPilotNameInput.value.trim() === "" || fuelLevelInput.value.trim() === "" || cargoMassInput.value.trim() === ""){
         alert("You must input all fields before submitting the form!")
      }

      if(typeOf(pilotNameInput.value)
   });


});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

