// EPISODE 1

// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Library",
//   weapon: "Rope",
// };

// const declareMurderer = function () {
//   return `The murderer is ${scenario.murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(verdict);
//ANSWER: The murderer is Miss Scalrlet.The object scenario is in the global scope so the declarMurder function has access to it.

//EPISODE 2

// const murderer = "Professor Plum";

// const changeMurderer = function () {
//   murderer = "Mrs. Peacock";
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//ANSWER: Error: assignment to constant variable. The changeMurderer function wants to reassign value to the constant variable murderer.

//EPISODE 3

// let murderer = "Professor Plum";

// const declareMurderer = function () {
//   let murderer = "Mrs. Peacock";
//   return `The murderer is ${murderer}.`;
// };

// const firstVerdict = declareMurderer();
// console.log("First Verdict: ", firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log("Second Verdict: ", secondVerdict);

//ANSWER: "First Verdict: The murderer is Mrs. Peacock" this is because when we call the declareMurder function it returns the variable murderer in the local scope which shadows the variable murderer in the global scope.
//"Second Verdict: The murderer is Profesor Plum" because the local variable murderer is not visible outside the function in which was declared;

//EPISODE 4

// let suspectOne = "Miss Scarlet";
// let suspectTwo = "Professor Plum";
// let suspectThree = "Mrs. Peacock";

// const declareAllSuspects = function () {
//   let suspectThree = "Colonel Mustard";
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// };

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//ANSWER: "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard." - the local variable suspectThree = "Colonel Mustard" shadows the global variable suspectThree = "Mrs. Peacock" and takes precedence over it.
//"Suspect three is Mrs. Peacock." - the local variable suspectThree is invisible outside the function declereAllSuspects

//EPISODE 5

// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Kitchen",
//   weapon: "Candle Stick",
// };

// const changeWeapon = function (newWeapon) {
//   scenario.weapon = newWeapon;
// };

// const declareWeapon = function () {
//   return `The weapon is the ${scenario.weapon}.`;
// };

// changeWeapon("Revolver");
// const verdict = declareWeapon();
// console.log(verdict);

//Answer: "The weapon is the Revolver." The function changeWeapon changes the value of the weapon key of the scenario object. Even though the object is declared with the const keyword this is legal, what's illegal is reassignment of the object.

//EPISODE 6

// let murderer = "Colonel Mustard";

// const changeMurderer = function () {
//   murderer = "Mr. Green";

//   const plotTwist = function () {
//     murderer = "Mrs. White";
//   };

//   plotTwist();
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ANSWER: "The murderer is Mrs. White." When we call the plotTwist function, which is nested inside the changeMurderer function, it uses its own variable murderer which shadows the one in the enclosing function.

//EPISODE 9

// let murderer = "Professor Plum";

// if (murderer === "Professor Plum") {
//   let murderer = "Mrs. Peacock";
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(verdict);

//ANSWER: "The murderer is Professor Plum." The let murderer = "Mrs. Peacock" variable has block scope, therefore, is not visible to the declareMurderer function
