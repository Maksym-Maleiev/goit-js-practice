// * Example 1 - Коллбек функції

/*
// TODO Напишіть наступні функції:

// TODO createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

// TODO logProduct(product) - колббек приймаючий об'єкт продукту і логіює його в консоль

// TODO logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

const createProduct = (partialProduct, callback) => {
  const newProduct = {
    id: Date.now(), // 1970.01.01 -> now in ms
    ...partialProduct,
  };

  callback(newProduct);
};

const logProduct = product => {
  console.log(product);
};

const logTotalPrice = product => {
  const { price, quantity } = product;
  let totalPrice = price * quantity;

  console.log(totalPrice);
};

// logProduct({ name: '🍎', price: 30, quantity: 3 });
// logTotalPrice({ name: '🍎', price: 30, quantity: 3 });

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
*/

// * Example 2 - Коллбек функції
/*
// TODO Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// TODO Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// TODO Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

const TRANSACTION_LIMIT = 1000;

const account = {
  userName: 'Max',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
*/

// * Example 3 - Коллбек функції

/*
// TODO Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.

// TODO Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

const each = (array, callback) => {
  const newArr = [];

  array.forEach(element => newArr.push(callback(element)));

  return newArr;
};

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);

console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
*/

// * Example 4 - Стрілочні функції

/*
// TODO Виконайте рефакторинг коду за допомогою стрілочних функцій.

const createProduct = (partialProduct, callback) => callback({ id: Date.now(), ...partialProduct });

const logProduct = product => console.log(product);

const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
*/

// * Example 5 - Стрілочні функції

/*
// TODO Виконайте рефакторинг коду за допомогою стрілочних функцій.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

const handleSuccess = message => console.log(`✅ Success! ${message}`);

const handleError = message => console.log(`❌ Error! ${message}`);

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
*/

// * Example 6 - Інлайн стрілочні функції
/*
// TODO Виконайте рефакторинг коду за допомогою стрілочних функцій.

const each = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
};

console.log(each([64, 49, 36, 25, 16], value => value * 2));
console.log(each([64, 49, 36, 25, 16], value => value - 10));
console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

// console.log(each(['Bobby', 'John', 'Peter'], value => `<li>${value}<\li>`));
// console.log(['Bobby', 'John', 'Peter'].map(value => `<li>${value}<\li>`));
*/

// * Example 7 - Метод forEach
/*
// TODO Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

const logItems = items => {
  console.log(items);
  items.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
  });
};

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
*/

// * Example 8 - Метод forEach
/*
// TODO Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((name, idx) => console.log(`${name} - ${phoneList[idx]}`));
};

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
*/

// * Example 9 - Метод forEach
/*
// TODO Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

const calсulateAverage = (...args) => {
  let total = 0;

  args.forEach(number => (total += number));

  return total / args.length;
};

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
*/
