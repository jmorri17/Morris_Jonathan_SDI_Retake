
//Jonathan Morris
//SDI Week 3 - Screencast Notes & Practice

alert ("JavaScript works!");


// GROUP 1: Celsius to Fahrenheit converter

var userUnit = prompt("Please enter Temperature: \n C for Celsius \n F for Fahrenheit");
var degFahrenheit = "F";
var degCelsius = "C";

if(userUnit == degFahrenheit){
    console.log("Fahrenheit has been entered");
}

else if (userUnit == degCelsius){
    console.log("Celsius has been entered");
}
var tempAmountF = prompt("Please enter the Temperature amount that you would like to convert:");
var celCalc = 5 /9 * (tempAmountF - 32);
var tempAmountC = prompt("Please enter the Temperature amount that you would like to convert:");
if (userUnit == degFahrenheit){
    alert(tempAmountF + "degrees in Fahrenheit" + celCalc + " degrees Celsius.");
}
else if (userUnit == degCelsius)

    var fahrenCalc = (9 / 5) * tempAmountC + 32;
{
    alert(tempAmountC + " degrees in Celsius" + fahrenCalc + "degrees Fahrenheith");
}


// GROUP 2: Multiple Results

//Check the Login

var userName = prompt("Enter User ID:");
var adminName = "JoeBagOdoughnuts";
(userName == adminName) ? console.log ("Username Entered") : console.log("Username not found.");
var adminPassword = "Fender1234";
if(userName == false) {
    console.log("Password");
}else if (userPassword == adminPassword){

}

var userPassword = prompt("Enter User password below:");
if (userPassword == adminPassword){
    console.log("Hello " + userName);
}


// GROUP 3: Multiple Conditions

//Tire Pressure

var tires = prompt ["LF 30 psi", "RF 35 psi", "LR 35 psi", "RR 35 psi"];

if (!(tires[0] <= tires[1] && tires [2] <= tires[3])) {
    console.log("Tire pressure is good!");
} else {
    console.log("Please check tire pressure");
}