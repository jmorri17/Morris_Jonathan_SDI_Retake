
/**
 * Created by Jonathan Morris on 4/07/15.
 */
;

//alert ("JavaScript works!");
//Dog Years

//Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
// Calculate how old Sparky the pit bull is in dog years based on his actual age.

// variables
// x = dogSparky
// y = human

var x =(1);
var y =(7);
//alert(x * y);

//output

console.log ("Sparky is", " " + (x * y));

//Slice of Pie part1

// A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.
// (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise,so this can be a decimal, like 3.52 slices, etc.)

//variables
var slices = 3.52;
var people = 10;
var pizzas = 6;
var perPerson = slices * pizzas / people;
var b = perPerson + "Per Person";

//output
console.log(b);

//Slice of Pie part 2

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests.
// Assume guests get whole slices, how many whole slices will Sparky feast on?

var sparky = 22 % 20;
var b = sparky + "slices";

console.log(b);

//Average shopping bill

var budget = [34,52,46,56,52];
var total = [34 + 52 + 46 + 56 + 52];
var average = total / 5;
var t = average + "Dollars";

console.log(t);

//Discounts
//Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax.
// (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)


var orginalPrice = 346;
var discount= 20;
var item = "ThingAmaGig";
ThingAmaGig = Price;
var tax = 8;
var withDiscount = ThingAmaGig -20;
var withTax = ThingAmaGig + tax;
var withoutTax = ThingAmaGig - tax;

console.log(ThingAmaGig, withDiscount, withoutTax, withTax);
