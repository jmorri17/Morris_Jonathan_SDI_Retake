//alert ("JavaScript works!");



//Jonathan Morris
//SDI
//Conditionals Assignment Week 3



// Are you selling Guitars?

var calGuitar = prompt("We are going to calculate how much of a profit you will make by selling your Guitars! \n Are you going to sell them?");
var calGuitar = calGuitar.toLowerCase();
if (calGuitar==""){
    calGuitar = prompt("Please do not leave this field blank, it is required. \n Are you going to sell your Guitar?");
    calGuitar = calGuitar.toLowerCase();
    } else if (calGuitar !="yes" && calGuitar !="no"){
    calGuitar = prompt("Please only type yes or no. \n Are you going to sell your Guitar?");
    calGuitar = calGuitar.toLowerCase();
}

if (calGuitar === "no"){
    console.log("If you are not selling your Guitar, this calculator is of no use to you!");
    } else if (calGuitar === "yes") {
    console.log("Alright, lets calculate what your profits will be by selling your Guitar!");
    } else {
    console.log("The information that you entered is not valid, please try again.");
}

// How many guitars do you have?

if (calGuitar === "yes") {
    var sellingGuitars = prompt("How many guitars do you have?");
    if (sellingGuitars == "" || isNaN(sellingGuitars)) {
        sellingGuitars = prompt("Please use numbers to enter how many guitars do you have.\n This is a required field.")
    }


//console.log(sellingGuitars);

// Are you going to keep any of the guitars?

    var keep = prompt("Guitars are awesome! \n How many guitars are you going to keep for yourself?");
    if (keep == "" || isNaN(keep)) {
        keep = prompt("Please use numbers to enter how many guitars you plan to keep. \n This is a required field.");
    }


// How much are you charging per guitar?

    var cost = prompt("How much money are you charging per guitar that you sell? \n Please enter numbers only.");
    if (cost == "" || isNaN(cost)) {
        cost = prompt("Please use numbers to enter how much you are charging per guitar \n Do not include the dollar sign.");
    }


// Maintenance costs stings and setups

    var expenses = prompt("How much money have you spent on these guitars so far?\n Please enter numbers only.");
    if (expenses == "" || isNaN(expenses)) {
        expenses = prompt("Please use numbers to enter how much your expenses have been on these guitars so far \n Do not include the dollar sign.");
    }


// Results

    var guitarSold = sellingGuitars - keep;
    console.log("You are selling " + guitarSold + " guitars for profit.");

    var guitarProfit = guitarSold * cost;
    var totalProfit = guitarProfit - expenses;

    if (expenses >= totalProfit) {
        console.log("You have not made a profit on these guitars. You have lost " + totalProfit + " dollars in expenses.");
    } else {
        console.log("You have made a profit of $" + totalProfit + " by selling these guitars!");
    }
}
