/*
Jonathan Morris
SDI Section 2
1504
Week 2
Expressions Assignment
 */

//alert("Javascript is working");

//Variables

var lesPaulWeight = 12; //Les Paul Guitar Weight
var stratWeight   =  8; //Stratocaster Guitar Weight
var teleWeight    =  6; // Telecaster Guitar Weight
var weightArray = [5,10,15,20,25]; //array used to cal avg. weight


//Prompts

lesPaulWeight = prompt ("How heavy is the Les Paul?, Enter Weight.");
stratWeight = prompt ("How heavy is the Stratocaster?, Enter Weight.");
teleWeight = prompt ("How heavy is the Telecaster?, Enter Weight.");

    var lpInput = lesPaulWeight
    var stratInput = stratWeight
    var teleInput = teleWeight

    var guitarWeight = Number(lpInput) + Number(stratInput) + Number(teleInput);
    var averageGuitarWeight =  guitarWeight /3;

    var weightTotal = (weightArray)[0] + weightArray[1] + weightArray[3] + weightArray[4] /5;

//Output

alert ("The average weight of the guitars are" + averageGuitarWeight);
alert ("The average total of the weight is " + weightTotal);

console.log ("The average weight of the guitars are " + averageGuitarWeight);
console.log ("The average total of the weight is " + weightTotal);