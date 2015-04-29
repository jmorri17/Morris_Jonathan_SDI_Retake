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

}