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
