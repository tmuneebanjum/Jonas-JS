function logger() {
  console.log("first function");
}
logger();

function foodProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = foodProcessor(5, 4);
console.log(appleOrangeJuice);

function describeCountry(country, population, capitalCity) {
  const info = `${country} has ${population} people and its capital city ${capitalCity}`;
  return info;
}
const details = describeCountry("pakistan", "6 million", "islmabad");
console.log(details);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);
