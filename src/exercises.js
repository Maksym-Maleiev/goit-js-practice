/*
 * Модуль 5. Заняття 9. Контекст виклику функції та this
 */

/*
 * Example 1 - Майстерня коштовностей
 
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною
 * та кількістю з властивості stones.
 */

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const { price, quantity } = this.stones.find(({ name }) => name === stoneName);

    return price * quantity;
  },
};

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

/*
 * Example 2 - Телефонна книга

 * Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.
 */

const phonebook = {
  contacts: [],

  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: this.generateId(),
      createdAt: this.getDate(),
    };

    this.contacts.push(newContact);
  },

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },

  getDate() {
    return Date.now();
  },
};

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// console.log(phonebook.contacts);

/*
 * Example 3 - Калькулятор
 
 * Створіть об'єкт calculator з трьома методами:
 */

// TODO read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// TODO add() - повертає суму збережених значень.
// TODO mult() - перемножує збережені значення та повертає результат.

const calculator = {
  // a: 0,
  // b: 0,
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

// console.log(calculator);

// calculator.read(10, 2);
// console.log(calculator);

// console.log(calculator.add());

// console.log(calculator.mult());

/*
 * SET
 */

// const arr = [1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 5];
// const set = new Set([1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 5]);

// console.log(arr);
// console.log(set);

/*
 * only unique
 */

// const arr = [1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 5];

// const uniqueArr1 = Array.from(new Set(arr));
// const uniqueArr2 = arr.filter((value, idx, array) => array.indexOf(value) === idx);

// console.log(uniqueArr1);
// console.log(uniqueArr2);

/*
 * Map
 */

const o1 = {};
const o2 = {};

const obj = {
  name: 'Bobby',
  2: 'werwrt',
};

console.log(obj);

obj[o1] = 1; // "[object Object]"
obj[o2] = 2; // "[object Object]"

console.log(obj);

let recipeMap = new Map([
  ['огірок', 500],
  ['Помідор', 350],
  ['цибуля', 50],
  [o1, 1],
  [o2, 2],
]);

console.log(recipeMap);
console.log(recipeMap.get(o1));
console.log(recipeMap.get(o2));
