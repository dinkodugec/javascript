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

// Equality Operators: == vs. ===
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
