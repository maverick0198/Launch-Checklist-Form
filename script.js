// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {

         let i= Math.floor(Math.random() * json.length);
         
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}">
         `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      //stops the form submission
      event.preventDefault();
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      
      //Adding Alerts -Chris

      //This validates all fields are filled... and valid input -chris
      if(pilotNameInput.value.trim() === "" || coPilotNameInput.value.trim() === "" || fuelLevelInput.value.trim() === "" || cargoMassInput.value.trim() === ""){
         alert("You must input all fields before submitting the form!")
      }else if( isNaN(pilotNameInput.value) === false ) {
         alert("Invalid Input: Pilot Name can not be a number.")
      }else if( isNaN(coPilotNameInput.value) === false ) {
         alert("Invalid Input: Co-pilot Name can not be a number.")
      }else if( isNaN(fuelLevelInput.value) === true ) {
         alert("Invalid Input: Fuel level can only be a number.")
      }else if( isNaN(cargoMassInput.value) === true ) {
         alert("Invalid Input: Cargo mass can only be a number.")
      }else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${coPilotNameInput.value} Ready`;
         document.getElementById("fuelStatus").innerHTML = "Fuel Level high enough for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass low enough for launch";

         document.getElementById('launchStatus').innerHTML = 'Awaiting Information Before Launch';
         document.getElementById('launchStatus').style.color= "black";


         if(fuelLevelInput.value < 10000){
            document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey. Shuttle will require at least 10,000 liters!`
            document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch!';
            document.getElementById('launchStatus').style.color= "red";
         } 
         if(cargoMassInput.value > 10000){
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off. Cargo must be under 10,000 kilograms!"
            document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch!';
            document.getElementById('launchStatus').style.color= "red";
         }
         if(fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
            document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch';
            document.getElementById('launchStatus').style.color= "green";

         }


         document.getElementById("faultyItems").style.visibility = "visible";
      }


      
      
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

