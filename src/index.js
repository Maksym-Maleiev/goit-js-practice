console.log('module_03.2');

//* ===== q.1 =====
/*
const apartment = {
  Rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
// Потрібно вивести
// lastTag - останній елемент масиву як tags.

// Таке рішення не підходить: (
const lastTag = apartment.tags[apartment.tags.length - 1];

console.log(lastTag);
*/

//* ==== q.3 ====
/*
function fn({ name = 'Nemo', age: yearsOld = 0 } = {}) {
  console.log(`Hello my name is ${name} and I'm ${yearsOld} years old!`);
}

fn({ name: 'Bobby', age: 15 });
fn({ name: 'Bobby' });
fn({ age: 20 });
fn({ age: 15, name: 'Bobby' });
fn({});
fn();
*/

//* ===== q.4. =====
/*
const fn = (a, b, ...wert) => console.log(a + b, wert);

fn(1, 2, 3, 4);
*/

//* ===== q.5. =====
/*
// let a = 2;
// let b = 5;
// console.log(a, b);

// let tmp = a;
// a = b;
// b = tmp;
// console.log(a, b);

let x = 1;
let y = 2;
console.log(x, y);

[y, x] = [x, y];
console.log(x, y);
*/

// * ==== Kahoot ====
/*
const user = {
  email: 'mango@mail.com',
  age: 20,
};

const { username } = user;
console.log(username);
*/

/*
const user = {
  email: 'mango@mail.com',
  age: 20,
};

const { username = 'User' } = user;
console.log(username);
*/

/*
const user = {
  email: 'mango@mail.com',
  age: 20,
};

const { email: userEmail } = user;
console.log(email); // помилка
*/

/*
const user = {
  email: 'mango@mail.com',
  age: 20,
  location: { lat: 10, lon: 20 },
};

const {
  location: { lat, lon },
} = user;
console.log(lat, lon); // 10 20
*/

/*
function foo({ username } = {}) {
  console.log(username);
}

foo();
*/

/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];

console.log(arr1 === arr2);
*/

/*
function foo({ a, b, c, ...props }) {
  console.log(props);
}

foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });
*/
