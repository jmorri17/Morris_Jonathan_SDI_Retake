//Jonathan Morris
//SDI
//Week 4 Functions Assignment

// Plus tax calculator.

// Variables 

var origPrice = prompt("Calculate the total price of your next purchase.\nWhat is the original price of the product?\nPlease do not enter a dollar sign");
origPrice = parseInt(origPrice);

var yesFood = function () {
 console.log("Food items will not be taxed.\nThe cost of your item is $" +origPrice+ ".");
};

// Validate the variable prompt.

while (isNaN(origPrice) || origPrice===""){
 if (isNaN(origPrice)){
  origPrice = prompt("Please only enter numbers.\nWhat is the original price of the product?");
 } else if(origPrice===""){
  origPrice = prompt("This field is required, please do not leave it blank.\nWhat is the original price of the product?");
 }
}

var foodProduct = prompt("Is this product a food item?");
foodProduct = foodProduct.toLowerCase();

while (foodProduct!=="yes" && foodProduct!=="no" || foodProduct===""){
 if(foodProduct!=="yes" && foodProduct!=="no"){
  foodProduct = prompt("Please only enter yes or no.\nIs this a food item?")
 } else if(foodProduct===""){
  foodProduct = prompt("This field is required, please do not leave it blank.\nIs this a food item?");
 }
}

foodProduct = foodProduct.toLowerCase();

if (foodProduct==="no") {

// Tax percentage variable.
 var taxAmount = prompt("Please enter the percentage of sales tax.");
 taxAmount = parseInt(taxAmount);
 var divide = 100;

// Validate

 while (isNaN(taxAmount) || taxAmount === "") {
  if (isNaN(taxAmount)) {
   taxAmount = prompt("Please only enter numbers.\nWhat is the percentage of sales tax?");
  } else if (taxAmount === "") {
   taxAmount = prompt("This field is required, please do not leave it blank.\nWhat is the original price of the product?");
  }
 }

// Create function

 function taxTotal(origPrice, taxAmount, divide) {
  var taxCash = (origPrice * taxAmount) / divide;
  return taxCash;
 }

// Returned

 var taxCash = taxTotal(origPrice, taxAmount, divide);
 console.log("The amount in tax you will be paying is $" + taxCash + ".");


// 2nd Function

 function price(taxCash, origPrice) {
  var totalPrice = taxCash + origPrice;
  return totalPrice;
 }

// Calculated return

 var totalPrice = price(taxCash, origPrice);
 console.log("The total amount you will pay for this item is $" + totalPrice + ".");

} else if (foodProduct==="yes") {
 yesFood();
}

/*Testing results

item amount = 600
food item = no
tax amount =  5

console output
 The amount in tax you will be paying is $30.
 script.js:79 The total amount you will pay for this item is $630.

item amount = 50
 Food = yes

console output
 Food items will not be taxed.
 The cost of your item is $50.

 */