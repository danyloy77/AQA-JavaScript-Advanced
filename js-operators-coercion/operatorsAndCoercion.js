let age = 22;
let isCanGetLicence = age >= 18;
console.log(`Age: ${age} , Can get driver licence?: ${isCanGetLicence}`);

//------------------ 2

let user1 = "Lida";
let user2 = "Roma";
let greeting = "Hi, " + user1 + " and " + user2 + "!";
console.log(greeting);
console.log(user1.concat(" ", user2, " ", greeting));

//-------------------- 3

let inputString = "5.489";
let num = parseFloat(inputString);
let isNotNaN = !isNaN(inputString);
let roundedNumber = num.toFixed(1);
let backToString = num.toString();
console.log("Parse to number: ", num, typeof num);
console.log("Is non NaN: ", isNotNaN);
console.log("Rounded value:", roundedNumber);
console.log("Parse to string:", backToString, typeof backToString);

//---------- 4
let wiki =
  "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";
console.log("String length: ", wiki.length);
console.log("Replace Wiki: ", wiki.replaceAll("Wikipedia", "Intiti"));
console.log('Include "world"?', wiki.includes("world"));
console.log('End "Foundation"?', wiki.endsWith("Foundation."));

//--------- 5
let radius = 4;
let circleArea = Math.PI * Math.pow(radius, 2);
circleArea = circleArea.toFixed(2);
console.log(circleArea);

let length = 10;
let width = 7;
let rectangleArea = length * width;
rectangleArea = rectangleArea.toFixed(2);
console.log(rectangleArea);

let height = 15;
let cylinderVolume = Math.PI * Math.pow(radius, 2) * height;
cylinderVolume = cylinderVolume.toFixed(2);
console.log(cylinderVolume);
