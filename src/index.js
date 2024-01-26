console.log('module 03.1');

// * q.1
/*
function fn(user) {
  console.log(user.name); // Max
  console.log(user.age); // 30
}

fn({
  name: 'Max',
  age: 30,
});
*/

// * q.2
/*
const users = [
  { name: 'Bobby', age: 15 },
  { name: 'Chris', age: 20 },
  { name: 'Peter', age: 30 },
];

for (const user of users) {
  console.log(`${user.name} - ${user.age}`);
}
*/

// * ==== this ====
/*
const obj = {
  name: 'Max',
  age: 30,
  adult: true,
  sayHello: function () {
    // console.log(this.name);
    console.log(`Hello my name is ${this.name}`);
  },
};

obj.sayHello();
*/

// * q.3
/*
const user = Object.freeze({
  age: 25,
  name: 'Max',
});

console.log(user.name);

//! user.name = 'Harry';
*/

/*
const bookShelf = {
  books: ['The Last Kingdom'],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks();
*/

// * ==== ====
/*
const user = {
  age: 25,
  name: 'Max',
};

const user2 = user; // копія лінка
//TODO const user2 = { ...user }; // копія об'єкту

user2.name = 'Harry';
console.log(user);
console.log(user2);
*/

// * ==== hasOwnProperty ====

const user = {
  age: 25,
  name: 'Max',
  sayHello: function () {},
};

console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('adult')); // false
console.log(user.hasOwnProperty('sayHello')); // true
