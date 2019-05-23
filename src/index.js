'use strict';

// Global scope
var a = 10; // const reference change
// function printA() {
//   // Functional scope
//   var b = 20;
//   if (b === 20) {
//     // block scope
//     const c = [];
//     c.push(1);
//     c = [];
//     console.log(c);
//   }
// }
// let
// function printA() {
//   // Functional scope
//   var b = 20;
//   if (b === 20) {
//     // block scope
//     let c = [];
//     c.push(1);
//     c = [];
//     console.log(c);
//   }
// }
// Anonymous function
// Named function
// Callback function
// Closure function
// Arrow function
// Anonymous function
// const printA = function() {
//   console.log('something');
// };
// // Name function
// function printA() {
//   console.log('something');
// }
// function processing(callback) {
//   callback();
// }
// processing(function() {
//   console.log('processed');
// });
// const callbackFunc = function() {
//   console.log('I am callback');
// };
// processing(callbackFunc);
// function processing(callback) {
//   console.log('I am working');
//   callback();
// }
// function map(array, propName) {
//   const result = [];
//   for (let index = 0; index < array.length; index++) {
//     result.push(array[propName]);
//   }
//   return result;
// }
// function processing() {
//   const students = [
//     {
//       name: 'hentry',
//       remarks: 'Useless fellow',
//     },
//     {
//       name: 'martin',
//       remarks: 'Useless fellow',
//     },
//   ];
//   return students.map(function(student) {
//     return student.name;
//   });
// }
// console.log(processing());
// printA();
// Cloure
// function parent() {
//   var a = 10;
//   console.log('I am from parent');
//   return function() {
//     console.log(a);
//   };
// }
// const ref = parent();
// ref();
// Arrow function
// function processing(callback) {
//   callback();
// }
// processing(() => {
//   console.log(this);
// });

const teacher = {
  name: 'Teacher',
  getName: function getName() {
    console.log(this);
  },
};

var student = {
  name: 'Shweta',
  getName: function getName() {
    console.log(this);
  },
};

student.getName();
var ref = student.getName;
window.ref();

// bind, apply
const boundFunc = student.getName.bind(teacher);
boundFunc();
// for (var i = 0; i < 10; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// IIFE - immediate invocation function execution

// console.log(1);
// setTimeout(function() {
//   console.log(2);
// }, 1000);

// setTimeout(function() {
//   console.log(3);
// }, 10);

// setTimeout(function() {
//   console.log(4);
// }, 0);

// console.log(5);

// Rohith 1, 5, 4, 3, 2
// Shweta 1, 4, 5, 3, 2
// Arun 1, 5, 4, 3, 2

// Data types

// Primitives
// 1. Number
// 2. String
// 3. Boolean

// Special types
// 4. null
// 5. undefined

// Non primitives
// 6. Object
// 7. Array

// function findType() {
//   const a = {};
//   console.log(a instanceof Array);
// }

// Truthy / Falsy value

// const b = false;
// console.log(!!b);
// findType();

// function types() {
//   const str = '';

//   if (!!str) {
//     console.log('asdsd');
//   }
// }

// types();

// Inheritance
// function Car(company) {
//   this.company = company;
// }

// function Vehicle(type) {
//   this.type = type;
// }

// const vehicle = new Vehicle('4 wheeler');
// const car = Object.create(vehicle);
// car.company = 'Benz';

// console.log(car.type);
