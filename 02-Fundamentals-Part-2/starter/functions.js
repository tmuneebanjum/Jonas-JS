// function logger() {
//   console.log("first function");
// }
// logger();

// function foodProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = foodProcessor(5, 4);
// console.log(appleOrangeJuice);

// function describeCountry(country, population, capitalCity) {
//   const info = `${country} has ${population} people and its capital city ${capitalCity}`;
//   return info;
// }
// const details = describeCountry("pakistan", "6 million", "islmabad");
// console.log(details);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1990);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// function percentageOfWorld1(population, country) {
//   const percentage = (population / 7900) * 100;
//   console.log(percentage);
//   const pop = `${country} has ${population} million people, so it's about ${percentage} of the world population.`;
//   return pop;
// }
// const worldpopulation = percentageOfWorld1("pakistan", 130);
// console.log(worldpopulation);

// //arrow function
// //challenge # 1

// const friends = ["Michael", "Steven", "Peter"];

// const year = new Array(1990, 1992, 1994);

// console.log(friends);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const name = "Muneeb";

// const muneeb = [name, "Anjum", 2001 - 2021, friends];
// console.log(muneeb);

// //ercersie

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1900, 1950, 2001];
// const age11 = calcAge(years[0]);
// console.log(age1);

// const friends = ["Michael", "Steven", "Peter"];
// friends.push("jay");
// console.log(friends);

// function calcTip(bill) {
//   if (bill >= 50 || bill <= 300) {
//     const tip = 0.15 * bill;
//     bill = tip + bill;
//     return bill;
//   } else {
//     const tip = 0.25 * bill;
//     bill = tip + bill;
//     return bill;
//   }
// }
// const tbill = [100, 200, 300];
// const totalTip = calcTip(tbill[0]);
// console.log(totalTip);

//  // objects

const muneeb = {
  firstName: "Muneeb",
  lastName: "Anjum",
  age: 2021 - 2001,
  job: "developer",
};
console.log(muneeb.firstName);

const namekey = "Name";
console.log(muneeb["first" + namekey]);
console.log(muneeb["last" + namekey]);

const interestedIn = prompt("What do you want to know about muneeb");

if (muneeb[interestedIn]) {
  console.log(muneeb[interestedIn]);
} else {
  console.log("Wrong Request");
}
