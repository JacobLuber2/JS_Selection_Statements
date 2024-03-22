// exercise 1 
let luckyNum = 8;
let guess = window.prompt("guess a number between 1 and 10");
if (guess < luckyNum) {
  console.log("Too Low!");
} else if (guess > luckyNum) {
  console.log("too high!")
} else {
  console.log("CORRECT!!!")
}


// exersise 2
let birthMonth = window.prompt("What is your birth month?");
switch (birthMonth) {
  case "january":
  case "febuary":
  case "march":
    console.log("WINTER!");
    break;
  case "april":
  case "may":
  case "june":
    console.log("SPRING!");
    break;
  case "july":
  case "august":
  case "september":
    console.log("SUMMER!");
    break;
  case "october":
  case "november":
  case "december":
    console.log("FALL!");
    break;
  default: console.log("invalid month!")
}

// exercise  3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "Black":
 colorId == "BK";
 break;
 case "Blue":
  color = "Blue";
  break;
 case "RD":
  color = "Red";
  break;
 case "PU":
  color = "Purple";
  break;
 default: 
  color = "White";
}

switch (sizeId) {
  case "S":
  size = "Small";
  break;
 case "M":
  size = "Medium";
  break;
case "L":
  size = "Large";
  break;
 case "XL":
  size = "Extra Large";
  break;
default: 
  size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);