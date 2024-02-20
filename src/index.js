console.log('module_04.1');

//* ===== closure =====
// const makeSheff = name => {
//   const makeDish = dish => {
//     console.log(`${name} готує ${dish}`);
//   };

//   return makeDish;
// };

// const sheff = makeSheff(`Max`); // makeDish

// sheff(`котлети`); // - ось тут викликається внутрішня функція makeDish
// sheff('пиріжок'); // - ось тут викликається внутрішня функція makeDish

//* ===== closure 2 =====

// const counter = (name, from = 1, step = 1) => {
//   let i = from;

//   return () => {
//     console.log(`${name} - ${i}`);
//     i += step;
//   };
// };

// const counter1 = counter('counter1'); // function
// const counter2 = counter('counter2', 10, 5); // function

// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4
// counter1(); // 5

// counter2(); // 10
// counter2(); // 15
// counter2();
// counter2();
// counter2();
// counter2();

// * ==== Kahoot1 ====
/*
const foo = callback => {
  callback(10);
};

const looger = value => {
  console.log(value);
};

foo(looger);
*/

// * ==== Kahoot3 ====
/*
const foo = () => 'Mango';

console.log(foo());
*/

// * Example 9 - Метод forEach
/*
// TODO Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

const calсulateAverage = (...args) => args.reduce((acc, value) => acc + value, 0) / args.length;

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
*/

// * ==== Example ====

// Через forEach і if
const evenNumberX2 = (...args) => {
  let newArr = [];

  args.forEach(number => {
    if (number % 2 === 0) {
      newArr.push(number * 2);
    }
  });

  return newArr;
};

// Через reduce
const evenNumberX2Reduce = (...items) =>
  items.reduce((acc, item) => (item % 2 === 0 ? [...acc, item * 2] : acc), []);

console.log(evenNumberX2(1, 2, 3, 4)); // [4, 8]
console.log(evenNumberX2(10, 21, 3, 4)); // [20, 8]
console.log(evenNumberX2(11, 2, 33, 44)); // [4, 88]

console.log(evenNumberX2Reduce(1, 2, 3, 4)); // [4, 8]
console.log(evenNumberX2Reduce(10, 21, 3, 4)); // [20, 8]
console.log(evenNumberX2Reduce(11, 2, 33, 44)); // [4, 88]
