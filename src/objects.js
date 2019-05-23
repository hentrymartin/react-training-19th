const car = {
  model: 'TIGOR',
  company: 'TATA',
};

console.log(car);

const car1 = new Object({
  company: 'TATA',
});

car1.model = 'TIGOR';

console.log(car1);

const vehicle = {
  type: '4 wheeler',
};

const car2 = Object.create(Object.prototype, {
  model: {
    value: 'TIGOR',
    writable: true,
  },
});

console.log(car2.type);
