// ! Example 1 - Основи об'єктів

// * Напиши скрипт, який для об'єкта user, послідовно:

// TODO додає поле mood зі значенням 'happy'
// TODO замінює значення hobby на 'skydiving'
// TODO замінює значення premium на false
// TODO виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

/*
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// const keys = Object.entries(user);

// for (const item of keys) {
//   console.log(`${item[0]}: ${item[1]}`);
// }

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
*/

// ! Example 2 - метод Object.values()

/*
 * У нас є об'єкт, де зберігаються зарплати нашої команди.
 * Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

/*
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
const values = Object.values(salaries);

for (const value of values) {
  sum += value;
}

console.log(sum);
*/

// ! Example 3 - Масив об'єктів

/*
 * Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта.
 */

/*
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }

  return 0;
}

console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Сапфір'));
console.log(calcTotalPrice(stones, 'Щебінь'));
console.log(calcTotalPrice(stones, 'Рубін'));
*/

// ! Example 4 - Комплексні завдання

/*
 * Напиши скрипт управління особистим кабінетом інтернет банку.
 * Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
 */

/*
 TODO Типів транзакцій всього два.
 TODO Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   TODO Метод створює та повертає об'єкт транзакції.
   TODO Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   TODO Метод, що відповідає за додавання суми до балансу.
   TODO Приймає суму транзакції.
   TODO Викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;

    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.unshift(newTransaction);
  },

  /*
   TODO Метод, що відповідає за зняття суми з балансу.
   TODO Приймає суму транзакції.
   TODO Викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій.

   TODO Якщо amount більше ніж поточний баланс, виводь повідомлення про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Зняття такої суми не можливе, недостатньо коштів');
      return;
    }

    this.balance -= amount;

    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.unshift(newTransaction);
  },

  /*
   TODO Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   TODO Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   TODO Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let sum = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }

    return sum;
  },
};

// console.log(account.getBalance());

// account.deposit(200);
// account.deposit(100);
// account.deposit(300);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(200);
// console.log(account.getBalance());

// account.withdraw(300);
// console.log(account.getBalance());

// account.withdraw(100);
// console.log(account.getBalance());

// account.withdraw(200);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(3));

// account.deposit(400);
// console.log(account.transactions);

// console.log('Sum deposit:', account.getTransactionTotal(Transaction.DEPOSIT));
// console.log('Sum withdraw:', account.getTransactionTotal(Transaction.WITHDRAW));

/*
 * CYCLE
 */

/*
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i += 1) {
  const element = arr[i];
  console.log(element);
}

for (const item of arr) {
  console.log(item);
}

arr.forEach(item => {
  console.log(item);
});
*/

/*
 * CALLBACK
 */
// const arr = [1, 2, 3, 4];
// arr.forEach(item => console.log(item));

// const showItem = item => console.log(item);
// arr.forEach(showItem);

// function showItem(item) {
//   console.log(item);
// }
// arr.forEach(showItem);

/*
 * classes HasOwnProperty
 */

/*
class Human {
  constructor(name) {
    this.name;
  }

  sayHello() {}
}

const bobby = new Human('Bobby');
bobby.age = 30;
console.log(bobby);

console.log(bobby.hasOwnProperty('age'));
console.log(bobby.hasOwnProperty('sayHello'));
*/

class Car {
  constructor(modal) {
    this.modal = modal;
    this.speed = 0;
    this.isOn = false;
  }

  acceleration(speed) {
    this.speed = speed;
  }
}

class ColoredCar extends Car {
  constructor(modal, color) {
    super(modal);
    this.color = color;
  }
}

const bmw = new Car('X5');
const mersedes = new Car('S300');

console.log(bmw);
console.log(mersedes);

const redBmw = new ColoredCar('X5', 'red');
console.log(redBmw);
