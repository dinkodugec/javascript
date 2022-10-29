/* let country = "Croatia"; //string
let continent = "Europe";
let population = 3900500; //number
let fullAge = true; // boolean
fullage = 32; // dynamic typing, not anymore needing keyword let
let children; //undefined
console.log(children); //undefined type in console

// null, BigInt(big integer)
console.log(country);
console.log(continent);
console.log(population);

console.log(typeof "dinko"); // get type of data - string
console.log(typeof 23); // get type of data - number
console.log(typeof true); // get type of data - boolean
console.log(typeof null); // bug in Javascript :) */

/* let age = 30;
age = 32; // mutate age variable, reasigning value of a variable

const birthDay = 1991; // value can not be changed and also can not be empty
birthday = 1990; //can not be changed

var job = "dev"; // should be avoided
job = "devOp";

language = "php"; //never declare variable in this way */

////////////////////////////////////
// Basic Operators
// Math operators
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); */

/* const firstName = "Dinko";
const job = "developer";
const birthYear = 1990;
const year = 2022;

const dinko =
  "I am " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
console.log(dinko);
//template literals
const DinkoNew = "I am ${firstName}";
console.log(DinkoNew);

console.log("String \n\
multiple \n\
lines");
 */

////////////////////////////////////
// Taking Decisions: if / else Statements
/* const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); */

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
number() - //convert strings to number
  console.log(Number(inputYear) + 18);

console.log(Number("Jonas")); // in cosole give us NaN, not a number
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
//JS have automatic type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
(" operator alwasy triger to number");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // '11'
n = n - 1;
(" operator alwasy triger to number");
console.log(n);
