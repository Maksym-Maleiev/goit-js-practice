// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду.
// Різницю яблук та винограду.

const apples = 47;
const grapes = 135;
const total = apples + grapes;

console.log(total);

// const diff = apples - grapes; // -88
const diff = Math.abs(apples - grapes); // щоб не було "-88"

console.log(diff); // 88

console.log(Math.PI); // 3.14

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

let students = 100;
students += 50; // students = students + 50;

console.log(students);

// ======== ++ ========

/*
let x = 0;

console.log(x++); // 0
console.log('x:', x); // 1

console.log(++x); // 2
*/

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції
// надання значення змінної result.

const result = 108 + 223 - 2 * 5;

console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
// Значення змінної value.Використовуй методи Math.floor(), Math.ceil()
// та Math.round().Перевірте, що буде в консолі при значеннях 27.3 і 27.9.

const valueMin = 27.3;
const value = 27.5;
const valueMax = 27.9;

console.log(Math.floor(valueMin)); // 27 - завжди вниз
console.log(Math.ceil(valueMin)); // 28 - завжди угору
console.log(Math.round(valueMin)); // 27 - як у математиці

console.log(Math.floor(value)); // 27
console.log(Math.ceil(value)); // 28
console.log(Math.round(value)); // 28

console.log(Math.floor(valueMax)); // 27
console.log(Math.ceil(valueMax)); // 28
console.log(Math.round(valueMax)); // 28

console.log(~~value); // бере цілу частину числа

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const botsResult = repairBots + defenceBots;

const message = `${companyName} has ${botsResult} bots in stock`;

console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.

// Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання). Нецілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

let weight = '88,3'; // вага
let height = '1.75'; // висота

weight = weight.replace(',', '.');
const bmi = Number.parseFloat(weight) / Math.pow(Number.parseFloat(height), 2); // більш сучасний метод - Number.parseFloat(height) ** 2;

console.log(bmi.toFixed(1)); // 28.8

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

console.log(5 > 4); // true

console.log(10 >= '7'); // true

console.log('2' > '12'); // true

console.log('2' < '12'); // false

console.log('4' == 4); // true

console.log('6' === 6); // false

console.log('false' === false); // false

console.log(1 == true); // true

console.log(1 === true); // false

console.log('0' == false); // true

console.log('0' === false); // false

console.log('Papaya' < 'papaya'); // true

console.log('Papaya' === 'papaya'); // false

console.log(undefined == null); // true

console.log(undefined === null); // false

console.log(null === null); // true

// Example 8 - Логічні оператори
// Яким буде результат виразів?

console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && 'kiwi'); // 'kiwi'

console.log(true && 0 && 'kiwi'); // 0

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0); // false

console.log(null || (2 && 3) || 4); // 3

// Example

let x = 5;
let y = 6;

console.log(x && y > 0 ? 'hurray' : 'foo');

// Example 9 - Значення за промовчанням та оператор нульового злиття
// Отрефакторіть код так, щоб у змінну value присвоювалося значення
//  змінної incomingValue, якщо воно не дорівнює undefined або null.
// Інакше має надаватися значення defaultValue.Перевірте роботу скрипта 
// для сліпучих значень змінної ввідміну значення: null, undefined, 0, false.
// Використовуй оператор ?? (Nullish coalescing operator).

const incomingValue = 5;
const defaultValue = 10;
const resultValue = incomingValue  ?? defaultValue;

console.log(resultValue);

// Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин)
//  у рядок у форматі годин і хвилин HH: MM.

// - 70 покажет 01:10
// - 450 покажет 07:30
// - 1441 покажет 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);