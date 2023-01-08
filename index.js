// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;



// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}



//part a crewStatus

if (crewStatus == true) {
  console.log("Crew Ready");
} else {
  console.log("Crew not ready");
}



//part b computerStatus

if (computerStatusCode == 200){
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode ==400) {
  console.log("Success! Computer online.");
} else{
  console.log("ALERT: Computer offline!");
}



//part c shuttleSpeed

if (shuttleSpeed > 17500) {
  console.log("ALERT: escape velocity reached!"); 
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}



//part e Monitor the shuttle's fuel status
// Implement the following checks using if/else if/else statements:
//// Code 5a - 5f here:

let engineIndicatorLight2 = 'red blinking';
let fuelLevel2 = 21000;
let engineTemperature2 = 1200;


//If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."*/

if (fuelLevel2 > 20000 && engineTemperature2 <= 2500) {
   console.log("Full tank. Engines good.");
} 

  
//b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above //50%.  Engines good."

else if (fuelLevel2 > 10000 && engineTemperature <= 2500) {
   console.log("Fuel level above 50%. Engines good.");
}


//c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

else if (fuelLevel2 > 5000 && engineTemperature <= 2500) {
   console.log("Fuel level above 25%. Engines good.");
} 
  

//d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

 else if (fuelLevel2 <= 5000 || engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.");
} 


//e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

else if (fuelLevel2 < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
   console.log("ENGINE FAILURE IMMINENT!");
}

  
//f) Otherwise, print "Fuel and engine status pending..." */

else {
   console.log("Fuel and engine status pending...");
}
  


// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.

let commandOverride = true;

if(commandOverride == false) {
    if(fuelLevel2 > 5000 && engineIndicatorLight2 == "red blinking") {
    console.log("Shuttle ready to launch");  
    } 
}

/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */


if (fuelLevel2 > 20000 && engineIndicatorLight2 != "red blinking" || commandOverride == true) {
    console.log("Cleared to launch!");
} else {
  console.log("Launch Scrubbed!");
}
