"use strict";

var car = {
  model: 'TIGOR',
  company: 'TATA'
};
console.log(car);
var car1 = new Object({
  company: 'TATA'
});
car1.model = 'TIGOR';
console.log(car1);
var vehicle = {
  type: '4 wheeler'
};
var car2 = Object.create(Object.prototype, {
  model: {
    value: 'TIGOR',
    writable: true
  }
});
console.log(car2.type);