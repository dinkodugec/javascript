/* let js = "amazing";
console.log(40 + 8 + 34 - 10);
let PI = 3.1415;
 */

/* let MarkMass = 78;
let JohnsMass = 92;

let MarkHeight = 1.69;
let JohnsWeight = 1.95;

let MarkBMI = MarkMass / MarkHeight ** 2;
let JohnsBMI = JohnsMass / JohnsWeight ** 2;

console.log(MarkBMI, JohnsBMI);
 */

/* // Equality Operators: == vs. ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
 */

// Logical Operators
/* const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
 */

/* const teamDolphins = 96 + 108 + 89;
console.log(teamDolphins);
const teamKoalas = 88 + 91 + 110;
console.log(teamKoalas);

const avarageDolphins = teamDolphins / 3;
console.log(avarageDolphins);

const avarageKoalas = teamKoalas / 3;
console.log(avarageKoalas);

if (avarageDolphins > avarageKoalas && avarageDolphins > 100) {
  console.log("Dolphins are better");
} else if (avarageDolphins < avarageKoalas && avarageDolphins > 100) {
  console.log("Koalas is better");
} else if (
  avarageDolphins == avarageKoalas &&
  avarageDolphins > 100 &&
  avarageKoalas > 100
) {
  console.log("they are good");
} else {
  console.log("no one win");
} */

// The switch Statement
/* const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; //without break code is not stop, just like in php
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

//this is same just in switch statement

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
 */

// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
