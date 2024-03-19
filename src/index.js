console.log('module_05.1');

// function sayHello(a, b) {
//   console.log(this, a + b);
// }

// const obj1 = {
//   name: 'Max',
// };

// const obj2 = {
//   name: 'Dasha',
// };

// const greet1 = sayHello.bind(obj1);
// setTimeout(greet1, 2000);

// const greet2 = sayHello.bind(obj2);
// setTimeout(greet2, 4000);

// const obj3 = { name: 'John' };
// const obj4 = { name: 'Chris' };

// sayHello.call(obj3, 1, 1);
// sayHello.apply(obj4, [1, 1]);

// function ffff() {
//   const args = Array.from(arguments);

//   sayHello.apply(obj4, args);
// }

// ffff(1, 10);

/*
 * interview question
 */

/*
 * we have Call, Apply
 * but no Bind
 * create your own Bind
 */

// function sayHello(a, b) {
//   console.log(this, a + b);
// }

// const obj1 = {
//   name: 'Max',
// };
// const obj2 = {
//   name: 'Dasha',
// };

// // const greet1 = sayHello.bind(obj1);

// // greet1(1, 1);

// function myBind(context, callback) {
//   return function () {
//     callback.apply(context, arguments);
//   };
// }

// const greet2 = myBind(obj1, sayHello);

// greet2(1, 1);

/*
 * short bind
 */

// function sayHello() {
//   console.log(`Hello ${this.name}`);
// }

// const obj1 = {
//   name: 'Max',
// };
// const obj2 = {
//   name: 'Dasha',
// };

// // sayHello.call(obj1);
// // sayHello.call(obj2);

// const greet1 = sayHello.bind(obj1);
// const greet2 = sayHello.bind(obj2);

// setTimeout(greet1, 2000);
// setTimeout(greet2, 4000);

/*
 * array deep copy
 */

const arr1 = [{ name: 'Bobby' }, { name: 'Peter' }];
const arr2 = _.cloneDeep(arr1);

arr2[0].name = 'Chris';

console.table(arr1);
console.table(arr2);

/*
 * undefined / window
 */

// function fn() {
//   console.log(this);
// }

// fn();

/*
 * kahoot_1
 */

// const obj = {
//   foo() {
//     console.log(this);
//   },
// };

// obj.foo();

/*
 * kahoot_2
 */

// function foo() {
//   console.log(this);
// }

// const obj = {
//   logCtx: foo,
// };

// obj.logCtx();
