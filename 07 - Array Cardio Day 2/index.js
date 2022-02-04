// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
function getAgeOf(person) {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year;
}

const isAdult = people.some((person) => getAgeOf(person) >= 19);
console.log(isAdult);


// Array.prototype.every() // is everyone 19 or older?
const areAllAdults = people.every((person) => getAgeOf(person) >= 19);
console.log(areAllAdults);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const goodComment = comments.find((c) => c.id === 823423);
console.log(goodComment);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const indexOfGoodComment = comments.findIndex((c) => c.id === 823423);
console.log(indexOfGoodComment);

const newComments = [
    ...comments.slice(0, indexOfGoodComment),
    ...comments.slice(indexOfGoodComment + 1)
]

console.table(newComments);

