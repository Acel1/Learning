const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// FILTER
// Return table of inventors born between 1500 and 1600
let fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  } else {
    return false;
  }
});

console.table(fifteen);

//----------MAP----------//
//Return selected elements, here first and last name

let fullNames = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.table(fullNames);

let numbers = [1, 3, 4, 8, 9, 12];
let difference = numbers.map((current, index, array) => current - array[index - 1]).slice(1);
console.log(difference); //output: [2,1,4,1,3]

//----------SORT----------//
//Return inventors date birth in descending order

let order = inventors.sort((a, b) => (a.year < b.year ? 1 : -1));
console.table(order);

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); //output: [1,5,10,25,40,100]

//----------REDUCE----------//
//Return reducing element of the whole elements selected

let total = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(total);

//----------FOR EACH----------//
// Return selected element

inventors.forEach((inventor) => {
  console.log(inventor.year);
});

//----------FIND----------//
// Return element(s) matching instrtuction(s)

let marie = inventors.find((inventor) => {
  return inventor.first === "Marie";
});
console.log(marie);

//----------SOME----------//
// Return true/false if element(s) matchs or not instruction(s)

let isThereXavier = inventors.some((inventor) => {
  return inventor.first === "Xavier";
});
7;
console.log(isThereXavier);

//----------EVERY----------//
// Return true/false if EVERY elements match or not instruction(s)

let allDead = inventors.every((inventor) => {
  return inventor.passed;
});
console.log(allDead);

function youSure() {
  inventors.push({ first: "Dominique", last: "Navigo", year: 1962 });

  allDead = inventors.every((inventor) => {
    return inventor.passed;
  });
  console.log(allDead);
}
console.log(youSure); //output: false

//----------INCLUDES----------//
//Return true/false if array contains specified element

let numberArray = [1, 2, 5, 3, 4, 6];

let isIncludes = numberArray.includes(2);

console.log(isIncludes);
