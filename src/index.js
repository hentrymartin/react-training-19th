// Variables

var name = 'hentry';
const name1 = 'martin';
let city = 'bengaluru';
city = 'chennai';
console.log(name, name1, city);
var student = 'Poorva';
// Scopes

// Global scope
// Functional Scope

// Variable hoisting

// Types of functions

// named
// anonymous
// callback
// closure
// Arrow

// This object

const teacher = {
  name: 'martin',
};

const student = {
  name: 'Hentry',
  getName: function(city, state) {
    console.log('inside getName', this, city, state);
  },
};

// bind, apply
student.getName.bind(teacher, 'bengaluru', 'karnataka')();

const main2 = callback => {
  const a = 10;
  return function() {
    console.log('I am a closure', a);
  };
};

const ref = main2();
ref();

main();

function main() {
  var first;
  var student = 'Tamojit';
  console.log(student);
  const a = 10;
  const b = '10';
  if (a === b) {
    first = 'First';
  }
  console.log(first);
}

function main1() {
  var student = 'Tamojit';
  console.log(student);
}

main1();

// Array Methods
// map
// filter
// reduce
const cities = [
  {
    name: 'delhi',
    id: 1,
    location: {
      lat: '50.48',
      lng: '14.90',
    },
  },
  {
    name: 'bengaluru',
    id: 2,
    location: {
      lat: '50.48',
      lng: '14.90',
    },
  },
  {
    name: 'mumbai',
    id: 3,
    location: {
      lat: '50.48',
      lng: '14.90',
    },
  },
];

const cityString = cities.reduce((acc, city, index) => {
  return `${acc}${city.name} `;
}, '');

const reduce = function(array, initialValue, propName) {
  let result = initialValue || '';

  for (let index = 0; index < array.length; index++) {
    result = result + array[index][propName];
  }

  return result;
};

const citiesCombined = reduce(cities, '', 'name');
const citiesToBeFormatted = [...cities];

citiesToBeFormatted.push({
  name: 'chennai',
  id: 4,
  location: {
    lat: '50.48',
    lng: '14.90',
  },
});
console.log(cities, citiesToBeFormatted);

const chennai = {
  name: 'chennai',
  id: 4,
  location: {
    lat: '50.48',
    lng: '14.90',
  },
};

const newCity = { ...chennai };

newCity.name = 'Amaravathi';

console.log(chennai, newCity);

// How reduce works internally
// Copy object without reference
// Copy array without reference
// Event loop

// for (var index = 0; index < 5; index++) {
//   (function(index) {
//     setTimeout(function() {
//       console.log(index);
//     }, 1000);
//   })(index);
// }

console.log(1);

setTimeout(function() {
  console.log(2);
}, 100);

setTimeout(function() {
  console.log(3);
}, 1000);

setTimeout(function() {
  console.log(4);
}, 0);

console.log(5);
