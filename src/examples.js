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