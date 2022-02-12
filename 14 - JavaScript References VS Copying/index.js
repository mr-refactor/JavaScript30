let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Wes";
let name2 = name;
console.log(name, name2);

const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;
console.log(players, team);

// team[3] = "Lux"

const team2 = players.slice();
console.log(team2);

const team3 = [].concat(players);
console.log(team3);

const team4 = [...players];
team4[3] = "heehaw";
console.log(team4);

const team5 = Array.from(players);

const person = {
  name: "Wes Bos",
  age: 80,
};

const captain = person;
captain.number = 99;

console.log(person);

const cap2 = Object.assign({}, person, { age: 12 });
console.log(cap2);

const cap3 = { ...person };
console.log(cap3);

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};
console.log(wes);

const dev = Object.assign({}, wes);
console.log(dev);

//cloneDeep function online if you need deep cloning

// poormans is JSON and then back to Object
